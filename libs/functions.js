/**
 * Estimating the reading time
 * @param {string} text 
 * @returns 
 */
export function readingTime(text) {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}