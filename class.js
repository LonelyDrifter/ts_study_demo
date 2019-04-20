"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class 类（属性，方法）
var Person = /** @class */ (function () {
    // 构造函数
    function Person(name, username) {
        this.username = username;
        this.gender = '男'; // protected 受保护的 当前类和继承的子类使用
        this.age = 27; // private 私有的 当前类可以使用
        // this.name 内部  name 外部传来的
        this.name = name;
        this.username = username;
        // this.gender = gender; // 属性“gender”受保护，只能在类“Person”及其子类中访问。
    }
    Person.prototype.pringAge = function (age) {
        this.age = age;
        // console.log(this.age);
    };
    Person.prototype.pringName = function (name) {
        this.name = name;
        console.log(this.name);
    };
    Person.prototype.setGender = function (gender) {
        this.gender = this.gender;
    };
    return Person;
}());
var person = new Person('小刘', '小李');
// console.log(person.name, person.username);
person.pringAge(30);
// 创建子类 Student 继承 Person 
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, username) {
        return _super.call(this, name, username) || this;
    }
    // 重写父类方法
    Student.prototype.pringName = function (name) {
        this.name = name + '123';
        console.log(this.name);
    };
    return Student;
}(Person));
var Mr_L = new Student('小刘', '小李');
Mr_L.pringName('哈哈');
