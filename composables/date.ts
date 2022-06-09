import { computed } from "vue";
import { useNow } from "@vueuse/core";
import { differenceInMinutes, format, formatDistanceStrict } from "date-fns";

const now = useNow({ interval: 1000 });

const formatDate = (datetime: Date) => {
  return format(datetime, "d. MMMM y");
};

const formatTime = (datetime: Date) => {
  return format(datetime, "HH:mm");
};

const useFormattedDistance = (dateTime: Date) => {
  return computed(() => {
    const distance = sentenceCase(
      formatDistanceStrict(dateTime, now.value, {
        roundingMethod: "ceil",
        addSuffix: true,
      })
    );
    return distance;
  });
};

type Urgency = "past" | "now" | "soon" | "future";

const useUrgency = (fromDateTime: Date, toDateTime: Date) => {
  return computed<Urgency>(() => {
    const soonMinutes = 3 * 60;
    const started = differenceInMinutes(fromDateTime, now.value);
    const ended = differenceInMinutes(toDateTime, now.value);
    if (started < 0 && ended >= 0) {
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

export const useDatetime = (startAtDatetime: Date, endAtDatetime: Date) => {
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
