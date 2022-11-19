export const formatDuration = ms => {
    ms = new Date() - ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  const timeArray =  Object.entries(time)
    .filter(val => val[1] > 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)

  return `${timeArray[0]} ago`
};