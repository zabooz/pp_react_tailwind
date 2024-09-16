export function capitalizeFirstLetter(str:string) {
  // Check if the input is not empty
  if (str.length === 0) return "";

  // Capitalize the first letter and concatenate with the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
}
