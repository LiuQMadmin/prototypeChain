// 了解封装
// 掌握继承的几种实现方式
/**
 * 原型链继承（prototype属性/直接继承prototype）
 * 空对象作为中介
 * 构造函数绑定apply/call方法
 * 组合继承
 * 拷贝继承
 */
// 封装（把属性和方法封装一个对象中成为封装）
var user = {
    name: "张三",
    pwd: "123456",
    show: function () {
        console.log("show function");
    }
}
// 原型链继承的实现prototype属性
function Person() {
    this.foot = 2;
    this.head = 1;
};
function Student(name, age) {
    this.name = name;
    this.age = age;
};
// prototype实现继承，相当于完全删除了prototype上面的值
Student.prototype = new Person();
// 解决原型链继承紊乱的问题
Student.prototype.constructor = Student;
var stu1 = new Student("张三", 20);
console.log(stu1.name);


// 直接继承prototype，配合赋值空对象的方式
function flight() { }
flight.prototype.hight = 1000;
function plane(width) {
    this.width = width;
}
// 设置一个中间值，防止flight.prototype被更改
var proto = function () { };
proto.prototype = flight.prototype;
plane.prototype = new proto();
// 解决继承链紊乱
plane.prototype.constructor = plane;
var p = new plane(500);
console.log(p.hight);

