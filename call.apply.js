// 掌握构造函数绑定实现继承call、apply
// 掌握call和apply方法的异同
function Person() {
    this.foot = 2;
    this.head = 1;
    this.favorColor = ['red', 'yellow'];
};
function Student(name, age) {
    // call把Person绑定在子对象Student上面，借调Person的方法
    // Person.call(this);
    // apply把Person绑定在子对象Student上面，借调Person的方法
    Person.apply(this);
    this.name = name;
    this.age = age;
};
var stu1 = new Student("张三", 28);
console.log(stu1.foot, 'foot');
stu1.favorColor.push("blue");
var stu2 = new Student("李四", 56);
console.log(stu2.favorColor); // prototype绑定原型链的方式会受到stu1数组favorColor的影响 [ 'red', 'yellow', 'blue' ]

// B.call(A,args1, args2, args3) A调用B的一些方法
// B.apply(A,arguments)  A调用B的一些方法

// call和apply的区别
// 作用是一样的，就是参数的传递方式不同，call只能一个一个传递 ，apply只能传递一个数组

function Person1(address, sex) {
    this.foot = 2;
    this.head = 1;
    this.address = address;
    this.sex = sex;
};
function Student1(name, age) {
    // Person1.call(this, '北京', '女生');
    Person1.apply(this, ['北京', '女生']);
    this.name = name;
    this.age = age;
}
var stu3 = new Student1("小王八", 18);
console.log(stu3.address, "address");