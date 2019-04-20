"use strict";
// 泛型 Generic
// 在函数中使用泛型
function identify(arg) {
    return arg;
}
;
console.log(identify(20));
// 根据传递的类型，自动对应类型
function identify1(arg) {
    return arg;
}
;
// 明确类型
console.log(identify1('20'));
// 交给ts 推断类型
console.log(identify(20));
function identify2(arg) {
    return arg;
}
;
var myIdentify = identify2;
var myIdentifyOne = identify2;
// 明确类型
console.log(myIdentify('myIdentify'));
// 交给ts 推断类型
console.log(myIdentify(30));
// 或
// 明确类型
console.log(myIdentifyOne('myIdentifyOne')); // 在let myIdentifyOne: GenericInterfaceOne<number | string> = identify2;  指定完了
// 交给ts 推断类型
console.log(myIdentifyOne(40));
// 为泛型添加约束
// 指定参数属性
function getLength(obj) {
    return obj.length;
}
var obj = {
    name: 'obj',
    age: 25,
    length: 10
};
console.log(getLength(obj));
// 指定类型
function getLengthOne(obj) {
    return obj;
}
var obj1 = 25;
console.log(getLengthOne(obj1));
// 泛型应用在calss中
var CountNumber = /** @class */ (function () {
    function CountNumber(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;
    }
    CountNumber.prototype.calcalate = function () {
        return this.number1 + this.number2; // + 用于解析 ts 识别的， 用于计算
    };
    return CountNumber;
}());
var countnumber = new CountNumber(100, 200);
var countnumber1 = new CountNumber('100', '200');
console.log(countnumber.calcalate());
console.log(countnumber1.calcalate());
