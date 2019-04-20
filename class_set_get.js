"use strict";
// class set get 修饰词 用于隔离私有属性 和 公开属性
// class 静态属性和方法
var PersonOne = /** @class */ (function () {
    function PersonOne() {
        this._name = 'PersonOne_name';
    }
    // 静态方法
    PersonOne.getSpecialty = function () {
        return this.specialty;
    };
    Object.defineProperty(PersonOne.prototype, "setName", {
        // 私有属性赋值
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonOne.prototype, "getName", {
        // 私有属性取值
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    // 静态属性 可直接调用
    PersonOne.specialty = '唱歌';
    return PersonOne;
}());
var personone = new PersonOne();
console.log(personone.getName);
personone.setName = 'personone_name';
console.log(personone.getName);
console.log(PersonOne.specialty);
console.log(PersonOne.getSpecialty());
