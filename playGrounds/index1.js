// Không phải es6
// Có 2 cách function

// declaration function: hỗ trợ cơ chế hoisting => Không nên dùng
function a() {}

// expression function
const b = function () {}

// hoisting: Cho phép dùng 1 biến nào đó trước khi chạy code
console.log(fullname);
var fullname = 'dung';
console.log(fullname);


//...............1. Let, const

var num = 1;
let num1 = 2;
const PI = 3.14;
// PI = 2;

/**
 * Trong js có 2 kiểu dữ liệu: Tham trị, tham chiếuz
 * 
 * Object Array Fucntion: Là kiểu dữ liệu tham chiếu
 */
// Tham trị:
const age = 12;
const name = "hieu";
const hieuIsBla = true;
// Tham chiếu:
const student = { name: 'hieu' };
student.name = "dung";

//.................

