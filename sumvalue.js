"use strict";
var MyMath;
(function (MyMath) {
    function sumvalue(num1, num2) {
        return num1 + num2;
    }
    MyMath.sumvalue = sumvalue;
})(MyMath || (MyMath = {}));
