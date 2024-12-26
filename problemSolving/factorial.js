function factorial(n) {
   let result = 1;
   for (let i = 2; i <= n; ++i) {
      result = result * i;
      // arr.push(result);
   }
   console.log(result);
}
factorial(8);
