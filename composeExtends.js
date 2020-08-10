// 组合继承(原型链继承和call、apply继承)
// 方法的继承使用原型链继承，
// 属性的继承使用call、apply
function Person() {
    this.foot = 2;
    this.head = 1;
    this.favorColors = ["red", 'yellow'];
}
// 使用原型链继承实现方法的继承
Person.prototype.sayColor = function () {
    console.log("我喜欢的颜色是" + this.favorColors);
}
function Student(name, age) {
    // 使用构造函数绑定实现父类属性的继承
    Person.call(this);
    this.name = name;
    this.age = age;
};
// 原型链继承父类Person方法
Student.prototype = new Person();
Student.prototype.constructor = Student;

var stu1 = new Student("张三", 23);
stu1.favorColors.push('blue');

var stu2 = new Student("李四", 45);
stu2.sayColor();
console.log(stu2.favorColors);