"use strict";
var MyMath;
(function (MyMath) {
    MyMath.PI = 3.14;
    function calcCircle(value) {
        return value * MyMath.PI;
    }
    MyMath.calcCircle = calcCircle;
})(MyMath || (MyMath = {}));
