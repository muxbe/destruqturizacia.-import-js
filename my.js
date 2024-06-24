/* import { car, myName, secondCar } from "./module.js"; */
/* console.log(car); */
/* myName("abo");
console.log(myName); */
const secondCar = {
  marka: "mersedec",
  model: "e-klasse",
  engine: 2.0,
  bauear: 2003,
};
const { engine } = secondCar;
console.log(engine);
const years = [1997, 9, 11, 1997, 6, 24, undefined, 8];
const [jijibrth, jijimonth, jijiday, , ok = "okey", ...nonid] = years;
console.log(jijibrth);
console.log(jijimonth);
console.log(nonid);
const car = {
  marka: "mercedec",
  model: "clk",
  engine: 2.0,
  bauear: 2002,
};
const { marka: mark } = car;
console.log(mark);
