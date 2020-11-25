import { test } from "./test.js";
import kiemtra from "./test.js";

test("thông báo nè");
kiemtra("thông báo default");
// //không phải es6 - các cách khai báo function

// //declaration function
// function a() {}

// //expression function
// const b = function () {};

// //hoisting
// console.log(fullName);
// var fullName = "dung";
// console.log(fullName);

// //......1..Let, const ....
// scopeVar();
// function scopeVar() {
//   if (true) {
//     var phamViTruyCapCuaVar = 0;
//     let phamViCuaLet = 1;
//     console.log(phamViCuaLet); // đúng
//   }
//   // console.log(phamViCuaLet); // sai
//   console.log(phamViTruyCapCuaVar); // đúng
// }

// // console.log(phamViTruyCapCuaVar); // không đúng
// //pham vi su dung
// {
//   var num = 1;
//   var num = 2;
//   //let và const ko được phép khởi tạo 2 biến giống nhau trong cùng 1 block
//   let num1 = 2;
//   // let num1 = 3;
//   const pi = 3.15;
//   //   pi = 12;
// }

// //tham trị
// const age = 12;
// const name = "hieu";
// const hieuIsHandsome = true;
// //tham chiếu : object , array, function
// const student = { name: "hieu" };

// console.log(num);

// // let kaiBaoLaiNe = 1;
// // let kaiBaoLaiNe = 2;

// // arrow function
// const es5 = function () {};
// const es5Params = function (a, b) {
//   console.log(a);
// };
// const es5Return = function (a, b) {
//   return a + b;
// };

// const es6 = () => {};
// const es6Params = (a, b) => {
//   console.log(a);
// };
// const es6Return = (a, b) => a + b;

// // Rest Params

// // const sum = (a, b, c, d, e) => a + b + c + d + e;
// const sum = (...numberList) => {
//   console.log("numberList : ", numberList);
// };

// sum(1, 2, 3, 4, 5, 56, 6, 465, 46, 45, 645, 65, 4);

// // Spread Operator
// let khoA = ["táo", "xoài", "bưởi"];
// // let khoB = khoA; // bị tham chiếu
// let khoB = [...khoA]; // không bị tham chiếu

// // khoB.push("dâu");

// // thêm phần  tử mới vào mãng
// khoB = [...khoB, "dâu"];

// console.log("khoA : ", khoA); // ["táo", "xoài", "bưởi"]
// console.log("khoB : ", khoB); // ["táo", "xoài", "bưởi" , "dâu"]

// // Default Params

// const defaultParams = (a = 2) => console.log(a);
// defaultParams(); // 2
// defaultParams(4); // 4

// // Destructuring
// const danhSachKhoaHoc = ["JS", "ReatcJS"];
// // let js = danhSachKhoaHoc[0];
// // let ReatcJS = danhSachKhoaHoc[1];
// let [js, ReatcJS] = danhSachKhoaHoc;

// const hv = {
//   name: "nguyễn văn tèo",
//   age: 11,
// };
// // let ten = hv.name;
// // let tuoi = hv.age;

// // let { name: ten, age: tuoi } = hv;
// // let { name: name, age: age } = hv;
// let { name, age } = hv;
// console.log(name, age); // "nguyễn văn tèo" , 11

// const nha = {
//   ["cua" + "Nha"]: "cửa nhà",
// };

function foo() {
  return (a) => {
    console.log(this.a);
  };
}

var obj1 = {
  a: 2,
};

var obj2 = {
  a: 3,
};

var bar = foo.call(obj1);
bar.call(obj2); // 2, not 3!
