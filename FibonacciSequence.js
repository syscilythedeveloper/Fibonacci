function fibonacci(n) {
  output = [];
  for (var i = 0; i < n; i++) {
    if (i <= 1) {
      output.push(i);
    } else {
      lastTwo = output.slice(-2);
      // var value1 = lastTwo[0];
      // var value2 = lastTwo[1];
      // var newNumb = value1 + value2;
      output.push(lastTwo[0] + lastTwo[1]);
    }
  }
  console.log("last value of output is: " + output[output.length - 1]);
  console.log("first value of output is: " + output[0]);
  return output;
}

console.log(fibonacci(20));
