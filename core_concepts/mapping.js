// function mapping() {
//    const car = {
//       CarA: {
//          color: "black",
//          wheel: "4",
//          model: "toyota",
//       },
//       CarB: {
//          color: "white",
//          wheel: "8",
//          model: "hundai",
//       },
//    };
//    console.log(car.CarB.color);
//    // console.log(car.model);
// }
// mapping();
function mapping(expextedModel) {
   const car = {
      CarA: {
         color: "black",
         wheel: "4",
         model: "toyota",
      },
      CarB: {
         color: "white",
         wheel: "8",
         model: "hundai",
      },
      CarC: {
         color: "white",
         wheel: "8",
         model: "hundai",
      },
   };
   // const carKey = Object.keys(car).find(
   //    (key) => car[key].model === expextedModel
   // );
   const carKey = Object.keys(car).filter(
      (key) => car[key].model === expextedModel
   );
   console.log(carKey);

   const carVaule = Object.values(car).find(
      (car) => car.model === expextedModel
   );
   console.log(carVaule);
}
mapping("hundai");
