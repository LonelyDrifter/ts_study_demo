"use strict";
var people = {
    name: '小刘',
    age: 25,
    salary: 10000,
    ids: [1, 2, 3],
    greet: function () {
        console.log('谢谢！');
    }
};
// people.salary = 1000; //Cannot assign to 'salary' because it is a read-only property.
function printPeople(people) {
    console.log("\u6211\u53EB" + people.name + "," + people.age + "\u5C81\uFF0C\u6211\u7684\u5DE5\u4F5C\u662F" + people.salary);
}
printPeople(people);
people.greet();
// 创建类  可以实现多个接口
var NewPeople = /** @class */ (function () {
    function NewPeople() {
        this.name = 'newPeople';
        this.age = 25;
        this.salary = 50000;
        this.id = 1;
        this.course = 'IT';
    }
    NewPeople.prototype.greet = function () {
        console.log('Hello newPeople');
    };
    ;
    return NewPeople;
}());
// 实体要有子类的属性也要有父类的属性
var employee = {
    name: '继承PeopleInterface的Employee接口的实体',
    age: 25,
    salary: 100000,
    greet: function () {
        console.log('employee');
    },
    work: '前端开发'
};
console.log(employee);
