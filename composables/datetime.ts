import { computed } from "vue";
import { useNow } from "@vueuse/core";
import {
  differenceInMinutes,
  format,
  formatDistanceStrict,
  formatISO,
  isThisYear,
} from "date-fns";

const now = useNow({ interval: 1000 });

export const formatDate = (datetime: Date | null) => {
  return datetime
    ? format(datetime, isThisYear(datetime) ? "d. MMMM" : "d.MM.y")
    : "";
};

export const formatTime = (datetime: Date | null) => {
  return datetime ? format(datetime, "HH:mm") : "";
};

export const formatDatetime = (datetime: Date | null) => {
  return `${formatDate(datetime)} ${formatTime(datetime)}`;
};

export const useFormattedDistance = (dateTime: Date) => {
  return computed(() => {
    const distance = sentenceCase(
      formatDistanceStrict(dateTime, now.value, {
        roundingMethod: "round",
        addSuffix: true,
      })
    );
    return distance;
  });
};

type Urgency = "past" | "now" | "soon" | "future" | "permanent";

const useUrgency = (fromDateTime: Date, toDateTime: Date | null) => {
  return computed<Urgency>(() => {
    const soonMinutes = 3 * 60;
    const started = differenceInMinutes(fromDateTime, now.value);
    const ended = differenceInMinutes(toDateTime, now.value);
    if (toDateTime === null) {
      return "permanent";
    } else if (started < 0 && ended >= 0) {
      return "now";
    } else if (started >= 0 && started <= soonMinutes) {
      return "soon";
    } else if (started >= 0 && started > soonMinutes) {
      return "future";
    } else {
      return "past";
    }
  });
};

export const useDatetime = (
  startAt: Date | string,
  endAt: Date | string | null
) => {
  const startAtDatetime = new Date(startAt);
  const endAtDatetime = endAt ? new Date(endAt) : null;

  const formattedStartAtDate = formatDate(startAtDatetime);
  const formattedStartAtTime = formatTime(startAtDatetime);
  const formattedEndAtDate = formatDate(endAtDatetime);
  const formattedEndAtTime = formatTime(endAtDatetime);
  const formattedStartAtDistance = useFormattedDistance(startAtDatetime);
  const urgency = useUrgency(startAtDatetime, endAtDatetime);

  return {
    formattedStartAtDate,
    formattedStartAtTime,
    formattedEndAtDate,
    formattedEndAtTime,
    formattedStartAtDistance,
    urgency,
  };
};

export const today = () => formatISO(new Date(), { representation: "date" });
