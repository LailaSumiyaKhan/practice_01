// function test1() {
//    console.log("ami nilo");
// }
// test1();

// function test2() {
//    const a = " Run Test1 \n";
//    const b = " Run Test2";
//    console.log(a + b);
// }
// test2();
// function test3() {
//    const a = " your age is";
//    const b = 6;
//    console.log(a + " " + b);
// }
// test3();
// function tes4() {
//    const a = "test1";
//    const b = 4;
//    const c = 4.99;
//    console.log(typeof c, typeof a);
// }
// tes4();

// function arrObj() {
//    const a = [
//       {
//          name: "laila",
//          email: "1234@",
//       },
//       {
//          email: "00000@",
//          address: "shewrapara",
//          phone: "1233456",
//       },
//    ];
//    console.log(a[0].email);
//    console.log(a[1].email);
//    console.log(a[0].name);
// }
// arrObj();
// function arr() {
//    const a = ["your", "age", "is", "6"];
//    if (a[0] == "your") {
//       console.log(true);
//    } else {
//       console.log(false);
//    }
// }
// arr();
// function conditionArr() {
//    const arr = ["1", "2", "4", 6, 7, 8];
//    if (arr[2] == "4" || typeof (arr[2] == "String")) {
//       console.log(true + " " + "string value");
//    } else {
//       console.log(false);
//    }
// }

// conditionArr();

// function test(mark) {
//    if (mark > 0 && mark < 60) {
//       console.log("Grade F");
//    } else if (mark > 60 && mark < 70) {
//       console.log("grade C");
//    } else if (mark > 70 && mark < 80) {
//       console.log("Grade B");
//    } else if (mark > 80 && mark < 100) {
//       console.log("Grade A");
//    } else {
//       console.log("Enter a valid mark");
//    }
// }

// test(-6);
// function returnTest(mark) {
//    const f = "Grade F";
//    const c = "Grade C";
//    const b = "Grade B";
//    const a = "Grade A";
//    const invalid = "Enter a valid mark";
//    if (mark > 0 && mark < 60) {
//       return f;
//    } else if (mark >= 60 && mark < 70) {
//       return c;
//    } else if (mark >= 70 && mark < 80) {
//       return b;
//    } else if (mark >= 80 && mark < 100) {
//       return a;
//    } else {
//       return invalid;
//    }
// }

// console.log(returnTest(80));
// function sum(num1, num2) {
//    const result = num1 + num2;
//    return result;
// }
// function sub(num1, num2) {
//    const result = num1 - num2;
//    return result;
// }
// function mul(num1, num2) {
//    const result = num1 * num2;
//    return result;
// }
// function div(num1, num2) {
//    const result = num1 / num2;
//    return result;
// }
// console.log(sum(9, 4));
// console.log(sub(9, 4));
// console.log(mul(9, 4));
// console.log(div(9, 4));

// function vabiable(num1, num2, method) {
//    if (method == "sum") {
//       var result = "";
//       result = num1 + num2;
//    } else if (method == "sub") {
//       result = num1 - num2;
//    } else if (method == "mul") {
//       result = num1 * num2;
//    } else if (method == "div") {
//       result = num1 / num2;
//    }
//    console.log(result);
// }
// vabiable(2, 3, "sum");
// requires data dynamcity , requires block scope. example:file export (const )
//  requires block scope. ex:Loop(let )
// not requires data dynamcity , not requires block scope(var )
const arr = [1, 2, 4, 5, 6, "hello", "my", "name", "is", "laila", "10", 9, 7];
function loop() {
   for (let i = 0; i < arr.length; ++i) {
      let data = arr[i];
      console.log(data);
   }
}
// loop();
function loop1() {
   for (let i = arr.length - 1; i >= 0; --i) {
      let data = arr[i];
      console.log(data);
   }
}
// loop1();

function whileloop() {
   let i = 0;
   while (i <= arr.length - 1) {
      let data = arr[i];
      console.log(arr[i]);
      i++;
   }
}
// whileloop();

function sum(num1, num2) {
   return (total = num1 + num2);

   console.log("the total is " + total);
}

sum(10, 20);
