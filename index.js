export function mergeClassnames() {
  return arguments.filter((arg) => arg && typeof arg === "string").join(" ");
}
