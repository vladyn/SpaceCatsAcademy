/**
 * Format seconds to human readable text in a compact form:
 * s, m or H:m (not m:s or H:m:s)
 */
export const humanReadableTimeFromSeconds = (seconds) => {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  const totalMinutes = Math.floor(seconds / 60);
  let hours = Math.floor(totalMinutes / 60) || 0;
  const minutestoDisplay = totalMinutes % 60;
  let timeStr = ``;
  if (hours > 0) {
    timeStr += `${hours}h `;
  }
  timeStr += `${minutestoDisplay}m`;

  return timeStr;
};

/**
 * Switch case. A helper function to replace switch statement
 * @param {Object | Array} cases - The container of the cases
 * @return {Function} - the matched case
 * */

export const switchcase = (cases) => (defaultCase) => (key) =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase;

/**
 * Random index from an Array. Helper function.
 * @param array
 * @return {String|Object|Number|Map} Random Array Item
 */
export const randomIndex = (array) =>
  array[Math.floor(Math.random() * array.length)];
