function foo(a, b) {
if (isNaN(a) && isNaN(b)) {
  return true; // Handle NaN case
} else if (a === b) {
  return true;
} else {
  return false;
}
}
console.log(foo(NaN, NaN)); // true
console.log(foo(1, 1));     // true
console.log(foo(1, 2));     // false