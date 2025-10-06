export function formatBusTime(minutes: number): string {
  if (minutes < 1) return "Arriving now";
  if (minutes === 1) return "1 minute";
  return `${minutes} minutes`;
}
