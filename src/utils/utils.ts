export function getIconPath(filename: string) {
  return new URL(`./assets/${filename}`, import.meta.url).href;
}