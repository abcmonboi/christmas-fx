/** Parse "MM-DD" into month (1-12) and day (1-31). */
export function parseMonthDay(value: string): { month: number; day: number } {
  const match = /^(\d{2})-(\d{2})$/.exec(value.trim());
  if (!match) {
    throw new Error(`Invalid MM-DD date: "${value}"`);
  }
  const month = Number(match[1]);
  const day = Number(match[2]);
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    throw new Error(`Invalid MM-DD date: "${value}"`);
  }
  return { month, day };
}

function toOrdinal(month: number, day: number): number {
  return month * 100 + day;
}

/**
 * Inclusive season check. Supports ranges that cross New Year
 * (e.g. 12-01 → 01-07).
 */
export function isInSeason(
  now: Date,
  startDate: string,
  endDate: string,
): boolean {
  const start = parseMonthDay(startDate);
  const end = parseMonthDay(endDate);
  const current = toOrdinal(now.getMonth() + 1, now.getDate());
  const startOrd = toOrdinal(start.month, start.day);
  const endOrd = toOrdinal(end.month, end.day);

  if (startOrd <= endOrd) {
    return current >= startOrd && current <= endOrd;
  }
  // Crosses year boundary
  return current >= startOrd || current <= endOrd;
}

export function shouldEnable(
  options: { enabled?: boolean; startDate: string; endDate: string },
  now: Date = new Date(),
): boolean {
  if (options.enabled === true) return true;
  if (options.enabled === false) return false;
  try {
    return isInSeason(now, options.startDate, options.endDate);
  } catch {
    return false;
  }
}
