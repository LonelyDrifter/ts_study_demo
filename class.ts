// class 类（属性，方法）
class Person {
  public name: string; // public 公用的
  protected gender: string = '男'; // protected 受保护的 当前类和继承的子类使用
  private age: number = 27; // private 私有的 当前类可以使用
  // 构造函数
  constructor (name: string, public username: string) {
    // this.name 内部  name 外部传来的
    this.name = name;
    this.username = username;
    // this.gender = gender; // 属性“gender”受保护，只能在类“Person”及其子类中访问。
  }

  public pringAge(age: number) {
    this.age = age;
    // console.log(this.age);
  }

  public pringName(name: string) {
    this.name = name;
    console.log(this.name);
  }

  private setGender (gender: string) {
    this.gender = this.gender
  }
}

const person = new Person('小刘', '小李');
// console.log(person.name, person.username);
person.pringAge(30);

// 创建子类 Student 继承 Person 

class Student extends Person {
  constructor(name: string, username: string){
    super(name, username);
  }
  // 重写父类方法
  public pringName(name: string) {
    this.name = name + '123';
    console.log(this.name);
  }
}
const Mr_L = new Student('小刘', '小李');
Mr_L.pringName('哈哈');