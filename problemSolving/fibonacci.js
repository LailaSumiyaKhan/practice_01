// 0,1,1,2,3,5,8,13,21
function fibonacci(n) {
   let series = [0];
   if (n == 1) {
      series == series;
   } else {
      series = [0, 1];
   }
   for (let i = 2; i < n; ++i) {
      let result = series[i - 1] + series[i - 2];
      series.push(result);
   }
   console.log(series);
}
fibonacci(5);
