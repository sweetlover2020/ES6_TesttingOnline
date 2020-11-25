export const test = (message) => console.log(message);
export default test;

var tong = [1, 2, 3, 4, 5].reduce((tong, so) => {
  return (tong += so);
}, 0);
