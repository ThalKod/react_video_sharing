export const formatBytes = (bytes) => {
    if(bytes < 1024) return `${bytes} bytes`;
    if(bytes < 1048576) return `${(bytes / 1024).toFixed(2)}  KB`;
    if(bytes < 1073741824) return `${(bytes / 1048576).toFixed(2)} MB`;
    return `${(bytes / 1073741824).toFixed(2)} GB`;
};

export const formatSecond = (second) => {
    const h = Math.floor(second / 3600);
    const m = Math.floor(second % 3600 / 60);
    const s = Math.floor(second % 3600 % 60);

    const hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    const mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    const sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
};

export const formatSecondForRendering  = (second) => {
  const h = Math.floor(second / 3600);
  const m = Math.floor(second % 3600 / 60);
  const s = Math.floor(second % 3600 % 60);

  const hDisplay = h <= 0 ? "" : `${h}:`;
  const mDisplay = m <= 0 ? "0:" : `${m}:`;
  const sDisplay = s > 0 ? s : "";
  return hDisplay + mDisplay + sDisplay;
};
