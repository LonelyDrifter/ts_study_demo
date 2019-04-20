// interface 接口
interface PeopleInterface {
  name: string,
  age: number, // : 必传
  sex?: string,  // ?: 可选
  readonly salary: number, // 只读，不能修改
  [propName: string]: any, // [propName: string] 代表可以给任何名字
  greet():void
}
// interface 可以继承 type 不能继承
type People1 = { name: string, age: number };
let people: PeopleInterface = {
  name: '小刘',
  age: 25,
  salary: 10000,
  ids: [1, 2, 3],
  greet() {
    console.log('谢谢！');
  }
}

// people.salary = 1000; //Cannot assign to 'salary' because it is a read-only property.

function printPeople(people: PeopleInterface){
  console.log(`我叫${people.name},${people.age}岁，我的工作是${people.salary}`)
}
printPeople(people)
people.greet();

interface StudentInterface {
  id: number,
  course: string
}


// 创建类  可以实现多个接口
class NewPeople implements  PeopleInterface, StudentInterface{
  name: string = 'newPeople';
  age: number = 25;
  salary: number = 50000;
  greet() {
    console.log('Hello newPeople')
  };
  id: number = 1;
  course: string = 'IT'
}


// interface 接口的继承 
interface Employee extends PeopleInterface {
  work: string
}
// 实体要有子类的属性也要有父类的属性
const employee : Employee = {
  name: '继承PeopleInterface的Employee接口的实体',
  age: 25,
  salary: 100000,
  greet() {
    console.log('employee')
  },
  work: '前端开发'
}
console.log(employee);