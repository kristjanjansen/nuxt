import { useStorage } from "@vueuse/core";

//TODO: Use config
const fientaUrl = "https://fienta.com/api/v1";
const fientaToken = "5d3c8e89f216ac38b9a7f6add38f6f74";

type TicketStatus = "FREE" | "REQUIRES_TICKET" | "HAS_TICKET";

export type Ticketable = {
  fienta_id?: string;
  [key: string]: any;
};

type Ticket = {
  code: string;
  fientaid: string;
};

// Ticket local storage
// Security by obscurity

const tickets = useStorage<Ticket[]>("elektron_data", []);

// Internal functions

function getLocalTicket(code: string): Ticket | undefined {
  return tickets.value?.find((ticket) => ticket.code == code);
}

function setLocalTicket(code: string, fienta_id: string) {
  tickets.value = uniqueCollection(
    [
      ...tickets.value,
      {
        code: code,
        fientaid: fienta_id,
      },
    ],
    "code"
  );
}

async function getRemoteTicket(
  code: string
): Promise<{ fienta_status: string; fienta_id: string } | null> {
  const headers = { Authorization: `Bearer ${fientaToken}` };
  const res: any = await $fetch(`/tickets/${code}`, {
    baseURL: fientaUrl,
    headers,
  });
  if (res && res.ticket) {
    return {
      fienta_status: res.ticket.status, // TODO: type Fienta statuses
      fienta_id: res.ticket.event_id,
    };
  }
  return null;
  // TODO: return { status: FientaStatus, ticketable: Ticketable }
}

async function getTicketable(fienta_id: string): Promise<Ticketable | null> {
  //const fientaQuery = (fienta_id: string) =>
  //`_where[_or][0][fienta_id]=${fienta_id}&_where[_or][1][festival.fienta_id]=${fienta_id}`;

  //@TODO: Ticketable
  const { data: events } = await useEvents({
    filters: {
      fienta_id: { $eq: fienta_id },
    },
  });
  if (events.value.length) {
    // TODO: What is the right thing to do
    // on multiple results?
    return events.value[0];
  }
  // TODO: return { status: StapiStatus, ticketable: Ticketable }
}

// Public API

// We support multiple fienta IDs per content
// for parent <> child tickets

export function getTicketableStatus(ticketables: Ticketable[]) {
  let status: TicketStatus = "FREE";

  const ticketablesRequiringTickets = ticketables.filter(
    (ticketable) => ticketable.fienta_id
  );

  if (ticketablesRequiringTickets.length) {
    status = "REQUIRES_TICKET";
  }

  const ticketsForTicketables = ticketablesRequiringTickets.flatMap(
    (ticketable) =>
      tickets.value.filter((t) => t.fientaid == ticketable.fienta_id)
  );

  if (ticketsForTicketables.length) {
    status = "HAS_TICKET";
  }

  const ticketLinks = ticketablesRequiringTickets.map((ticketable) => {
    const url = "https://fienta.com/e/${fientaId}?step=tickets";
    const fientaId = ticketable.fienta_id;
    return replaceTokens(url, {
      fientaId,
    });
  });
  // TODO: Return { status: TicketStatus, url } where
  // url is link to Fienta ticket-purchasing page
  return { status, ticketLinks };
}

export const validateTicket = async (
  code: string
): Promise<Ticketable | null> => {
  const ticketable = ref(null);
  const localTicket = getLocalTicket(code);
  if (localTicket) {
    const ticketable = await getTicketable(localTicket.fientaid);
    if (ticketable) {
      return ticketable;
    }
    // TODO: Handle the case when you have validated ticket to
    // non-existing ticketable (event), currently we just return null
  } else {
    const remoteTicket = await getRemoteTicket(code);
    if (remoteTicket) {
      const rawTicketable = await getTicketable(remoteTicket.fienta_id);
      if (rawTicketable) {
        setLocalTicket(code, remoteTicket.fienta_id);
        return rawTicketable;
      }
      // TODO: Handle the case when you have nonvalidated ticket to
      // non-existing ticketable (event), currently we just return ref(null)
    }
  }
  // TODO: Return {
  //  status: TicketValidationStatus,
  //  ticketable: Ticketable,
  //  url: string
  // }
  // where url is `https://live.elektron.art/${festivalslug}/${eventslug}?code=${code}&fienta_id=${fienta_id}`
  return ticketable;
};
