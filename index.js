//add (1 + 80);
//60 - 40; //=> 20
//2 * 3.4; //=> 6.8
//5.0 / 2.5; //=> 2

function add(a,b){
  let total = a + b;
  return total;
}
add()
function subtract(a,b) {
  let total = a - b;
  return total;
}
subtract()
function multiply(a,b) {
  let total = a * b;
  return total;
}
multiply()
function divide(a,b) {
  let total = a / b;
  return total
}
divide()
function increment(n) {
  return n += 1
}
increment()
function decrement(n) {
  return n -= 1
}
decrement()
function makeInt(n) {
  return parseInt(n,10)
}
makeInt()
function preserveDecimal(n) {
  return parseFloat(n)
}
preserveDecimal()