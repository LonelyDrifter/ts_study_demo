"use strict";
// namespace : 命名空间  内部的属性方法要让外部获取到 需要加export
// const PI = 1;
// console.log(MyMath.sumvalue(5, 10));
// console.log(MyMath.calcCircle(8));
// console.log(PI);
// console.log(MyMath.PI);
// tsc --outfile namespace.js  sumvalue.ts namespace_path.ts namespace.ts 注意合并顺序
// /// 在ts 中代表引入文件
/// <reference path= "sumvalue.ts"/>
/// <reference path= "namespace_path.ts"/>
// tsc namespace.ts --outFile namespace.js
// 多重命名空间
var OneSpace;
(function (OneSpace) {
    var TwoSpace;
    (function (TwoSpace) {
        TwoSpace.a = 'TwoSpace中的a';
    })(TwoSpace = OneSpace.TwoSpace || (OneSpace.TwoSpace = {}));
})(OneSpace || (OneSpace = {}));
console.log(OneSpace.TwoSpace.a);
