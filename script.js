function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let a = 0, b = 1;
    for (let i = 2; i < num; i++) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    return b;
  }
}

// Test cases
console.log(fibonacci(1));  
console.log(fibonacci(5));  
