// // 基本数据类型
// // let num = 25;
// // num = 2;
// // 不能储存非原有的类型数据


// // ts 原型

// let num = 25;
// // 等同于
// // let num : number = 25;
// // let boolean = true;
// let boolean: boolean = true;
// let string: string = '123';
// let anything: any = '123';
// anything = 456;

// //  数组 元组 枚举
// let names: Array<string> = ['1', '2']; // 等同于 let names: string [] =  ['1', '2'];

// let ages: Array<number> = [1, 2] // 等同于 let ages: number [] = [1, 2];

// let any: Array<any> = [1, '2'] // 等同于 let any: any [] = [1, '2'];

// // 元组
// let list: [ number, string] = [ 1, '1'] // 每个位置的元素类型要对应上

// // 枚举 enum
// enum Color {
//   black,
//   yellow,
//   red
// }
// let myColor: Color = Color.black;
// console.log(myColor);


// // 函数
// // 函数的相关类型
// // 返回值类型
// function retunValue (): number {
//   return 123;
// }
// console.log(retunValue());

// // 空
// function sayHello (): void {
//   console.log('hello')
// }

// // 参数类型
// function sumValue(value1: number, value2: number) : number {
//   return value1 + value2; // 如果两个参数中有一个不是数值，返回NaN;
// };
// console.log(sumValue(1,2));

// // 函数类型
// let myFunc: (a: number, b: number) => number;

// // myFunc = sayHello;
// myFunc = sumValue;


// // object & type 
// let objectOne = {
//   name: '小小',
//   age: 12
// }
// // 会报错
// // objectOne = { }
// // Type '{}' is missing the following properties from type '{ name: string; age: number; }': name, agets(2739)

// // 错误
// // let objectTwo : {name: string, age: number} = {
// //   name: 12, // 不能将类型“number”分配给类型“string”。ts(2322) app.ts(74, 18): The expected type comes from property 'name' which is declared here on type '{ name: string; age: number; }'
// //   age: '12' //不能将类型“string”分配给类型“number”。ts(2322)
// // }
// // 正确
// let objectTwo : {name: string, age: number} = {
//   name: '小小',
//   age: 12
// }

// // 复杂对象类型
// let complex: {data: number[], myFunc: (item: number) => number[]} = {
//   data: [1, 2, 3],
//   myFunc: function(item: number):number[] {
//     this.data.push(item);
//     return this.data;
//   }
// }

// // type 生成类型,用于多个对象都用一个
// type MyType = {data: number[], myFunc: (item: number) => number[]};
// let complex1: MyType = {
//   data: [1, 2, 3],
//   myFunc: function(item: number):number[] {
//     this.data.push(item);
//     return this.data;
//   }
// }

// // union type 
// let unionType : number | string | boolean = 12;
// unionType = '12';
// unionType = true;
// // unionType = [1, 2] // 不能将类型“number[]”分配给类型“string | number | boolean”。不能将类型“number[]”分配给类型“string”

// // 检查类型
// let checkType = 10;
// if (typeof checkType == "number") {
//   // 类型的名字要用引号引起来
//   console.log('number')
// }

// // null 和 undefined
// let myNull = 1;
// // myNull = null; // 不能将类型“null”分配给类型“number”, 但将严格模式禁用掉就可以了，tsconfig.json 中 "strict": true 变为 false 即可。

// // never never类型是任何类型的子类型，也可以赋值给任何类型;然而，没有类型是never 的子类型或可以赋值给never类型（除了never 本身之外）。即使any也不可以赋值给never。通常表现为抛出异常或无法执行到终止点（例如无限循环）

// let x: never;
// // x = 123; // 不能将类型“123”分配给类型“never”。

// // never 的应用场景 抛出异常
// function error(messages: string): never {
//   throw new Error(messages);
// }
// // 死循环
// function loop(): never {
//   while(true) { }
// }

// let y : number;
// y = (() => {
//   throw new Error('error');
// })();