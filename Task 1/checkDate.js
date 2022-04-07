function checkDate(timestamp) {
  // коэффициент для перевода секунд в миллисекунды
  const RATIO_TO_MS = 1000;

  // текущая дата
  const currentDate = new Date();

  // Получение даты из timestamp, который был в секундах
  const timestampInMs = timestamp * RATIO_TO_MS;
  const dateFromTimestamp = new Date(timestampInMs);

  // UTC применяется для избежания ошибки нахождения в разных часовых поясах.
  // Получение текущих года, месяца, и дня
  const currentYear = currentDate.getUTCFullYear();
  const currentMonth = currentDate.getUTCMonth();
  const currentDay = currentDate.getUTCDay();

  // Получение года, месяца, дня и часов из timestamp
  const yearFromTimestamp = dateFromTimestamp.getUTCFullYear();
  const monthFromTimestamp = dateFromTimestamp.getUTCMonth();
  const dayFromTimestamp = dateFromTimestamp.getUTCDay();
  const hoursFromTimestamp = dateFromTimestamp.getUTCHours();

  let isSameDate = false;

  // проверка равенства дат
  if (
    currentYear === yearFromTimestamp &&
    currentMonth === monthFromTimestamp &&
    currentDay === dayFromTimestamp
  ) {
    isSameDate = true;
  }

  return {
    isSameDate: isSameDate,
    dayPeriod: hoursFromTimestamp >= 12 ? "pm" : "am",
  };
}
