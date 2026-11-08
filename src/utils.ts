export function bestQuality (qualities: string[]) {
  return `${qualities.reduce((acc, val) => parseInt(val) < acc ? parseInt(val) : acc, 0)}p`
}