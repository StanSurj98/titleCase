// take in a string and capitalize the first letter of each word
const titleCase = (s) => {
  // Edge 1: empty string - return empty string
  if (s === "") return "";
  // Edge 2: single capital letter, return single capital letter
  if (s.length === 1) return s[0].toUpperCase();

  // 1. turn the entire string to lowercase
  const lowCase = s.trim().toLowerCase().split("");

  // 1.1) empty array for the manipulated variables
  const newArr = [];
  // Edge 3: initial letter should be capped
  newArr.push(lowCase[0].toUpperCase());

  // 2. find white spaces
  for (let i = 1; i < lowCase.length; i++) {
    if (lowCase[i - 1] === " ") {
      newArr.push(lowCase[i].toUpperCase());
    } else {
      newArr.push(lowCase[i]);
    }
  };
  
  const result = newArr.join("");
  return result;
};

module.exports = titleCase;