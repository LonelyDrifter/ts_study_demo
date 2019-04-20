// 泛型 Generic

// 在函数中使用泛型
function identify(arg: any) {
  return arg
};

console.log(identify(20));

// 根据传递的类型，自动对应类型

function identify1<T>(arg: T): T {
  return arg
};
// 明确类型
console.log(identify1<string>('20'));

// 交给ts 推断类型
console.log(identify(20));

// 在接口中使用泛型
interface GenericInterface {
  <T>(arg: T): T;
}
// 或
interface GenericInterfaceOne<T> {
  (arg: T): T;
}

function identify2<T>(arg: T): T {
  return arg
};
let myIdentify: GenericInterface = identify2;
let myIdentifyOne: GenericInterfaceOne<number | string> = identify2;

// 明确类型
console.log(myIdentify<string>('myIdentify'));

// 交给ts 推断类型
console.log(myIdentify(30));
// 或
// 明确类型
console.log(myIdentifyOne('myIdentifyOne')); // 在let myIdentifyOne: GenericInterfaceOne<number | string> = identify2;  指定完了

// 交给ts 推断类型
console.log(myIdentifyOne(40));

// 为泛型添加约束
// 指定参数属性
function getLength<T extends { length: any }>(obj: T): any {
  return obj.length;
}

const obj = {
  name: 'obj',
  age: 25,
  length: 10
}
console.log(getLength(obj));

// 指定类型
function getLengthOne<T extends number>(obj: T): any {
  return obj;
}

const obj1 = 25
console.log(getLengthOne(obj1));

// 泛型应用在calss中
class CountNumber<T>{
  number1: T;
  number2: T;

  constructor (num1: T, num2: T) {
    this.number1 = num1;
    this.number2 = num2;
  }

  calcalate () :number {
    
    // return this.number1 + this.number2; // Operator '+' cannot be applied to types 'T' and 'T'.
    return +this.number1 / +this.number2; // + 用于解析 ts 识别的， 用于计算 
  }
}


const countnumber = new CountNumber<number>(100, 200);
const countnumber1 = new CountNumber<string>('100', '200');
console.log(countnumber.calcalate())
console.log(countnumber1.calcalate())