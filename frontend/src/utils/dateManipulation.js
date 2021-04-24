// eslint-disable-next-line import/prefer-default-export
export function addDaysToDate(date, days) {
  return new Date(date.getTime() + days * 1440 * 60000);
}

export function transformDateToString(date) {
  const offset = date.getTimezoneOffset();
  const modifiedDate = new Date(date.getTime() - offset * 60 * 1000);
  console.log(modifiedDate);
  return modifiedDate.toISOString().split('T')[0];
}
