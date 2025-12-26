export function isPiBrowser(): boolean {
  return typeof window !== "undefined" && !!window.Pi;
}
