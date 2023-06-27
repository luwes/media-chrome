function dashedToCamel(word) {
  return word.split("-").map(function(x, i) {
    return (i ? x[0].toUpperCase() : x[0].toLowerCase()) + x.slice(1).toLowerCase();
  }).join("");
}
function constToCamel(word, upperFirst = false) {
  return word.split("_").map(function(x, i) {
    return (i || upperFirst ? x[0].toUpperCase() : x[0].toLowerCase()) + x.slice(1).toLowerCase();
  }).join("");
}
function camelCase(name) {
  return name.replace(/[-_]([a-z])/g, ($0, $1) => $1.toUpperCase());
}
function isValidNumber(x) {
  return typeof x === "number" && !Number.isNaN(x) && Number.isFinite(x);
}
function isNumericString(str) {
  if (typeof str != "string")
    return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export {
  camelCase,
  constToCamel,
  dashedToCamel,
  delay,
  isNumericString,
  isValidNumber
};
