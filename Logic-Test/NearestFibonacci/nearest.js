var fib = [0, 1];
for (var i = fib.length; i < 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}
console.log(fib);
// look in your console
