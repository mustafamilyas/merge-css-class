export function mergeClassnames(...args) {
  let result = "";
  for (const arg of args) {
    if (typeof arg === "string") {
      result += arg + " ";
    }
  }
  return result.trim();
}
