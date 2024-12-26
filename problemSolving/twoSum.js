function nestedLoop() {
   for (let i = 1; i <= 3; ++i) {
      for (let j = 1; j <= 3; ++j) {
         console.log(i, j);
      }
   }
}
// nestedLoop();
//[2,4,8,20,5], 12
function twoSum(arr, target) {
   for (let i = 0; i < arr.length; ++i) {
      for (let j = i + 1; j < arr.length; ++j) {
         let result = arr[i] + arr[j];
         if (result === target) {
            console.log(`(${arr[i]}, ${arr[j]})`);
         }
      }
   }
}
twoSum([1, 2, 3, 4, 5, 6, 7], 5);
