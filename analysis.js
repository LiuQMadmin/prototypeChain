// 了解什么是预解析：提前解析代码，
// var num = 10;
// console.log(num); //10

console.log(num); //undefined
var num = 10;
/**
 * 相当于：
 * var num;
 * console.log(num);
 * num = 10;
 */

/**
 * 结论 ：
 * 1. 预解析可以把变量的声明提前
 * 2. 预解析可以把函数的声明提前
 */
f1(); // undefined
var js_a = 20;
function f1() {
    console.log(js_a);
}
// 相当于下面这个写法
// var js_a;
// function f1() {
//     console.log(js_a);
// }
// f1();
// js_a = 20;


