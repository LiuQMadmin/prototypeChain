function f1() {  //函数声明的方式 如果出现两个一样的函数，后面的会覆盖前面的函数
    console.log("hello");
}
f1();
function f1() {  //函数声明的方式 如果出现连个一样的函数，后面的不会覆盖前面的函数
    console.log("world");
};
f1();
let fn2 = function () {
    console.log("fn2-01");
}
fn2();
fn2 = function () {
    console.log("fn2-02");
}
fn2();

(function () { //自调用函数
    console.log("自调用函数");
})()

// 作用域 & 块级作用域
// 局部变量和全局变量
// 局部作用域和全局作用域
// 隐士全局变量和全局变量的区别

// 块级作用域：{}就是一块作用域，在{}也可以使用,js没有块级作用域，但是函数块级作用域除外
// 全局作用域：全局变量的使用范围
// 局部变量：局部变量的使用范围
function Kscope() {
    if (true) {
        var a = '10086';
    }
    console.log(a); //10086
}
Kscope();
function Kscope1() {
    if (true) {
        let a = '10086';
    }
    console.log(a); //报错
}

// 隐士全局变量：声明的变量没有var，就叫隐士全局变量
// 隐式全局变量是可以被删除的，而全局变量不能被删除
num = 1; // 默认变成 var num = 1;
function isVar() {
    nums = 100;
}
delete num;
delete nums;
console.log(typeof num); //number
console.log(typeof nums); //undefined 被删除掉了


// 作用域链（逐层向上找，直到找到为止）
var jsc = 10; // 0级作用域
function jschain() {
    var jsc = 20; // 1级作用域
    function jschain1() {
        var jsc = 30; //2级作用域
        function jschain2() {
            var jsc = 40; // 3级作用域
            console.log(jsc);
        }
        jschain2();
    }
    jschain1();
}
jschain();