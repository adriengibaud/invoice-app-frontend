/* eslint-disable consistent-return */
// eslint-disable-next-line import/prefer-default-export
export function capitalizeFirstLetter(string) {
  if (string) return string.charAt(0).toUpperCase() + string.slice(1);
}
