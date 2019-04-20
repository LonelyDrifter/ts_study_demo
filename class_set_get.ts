// class set get 修饰词 用于隔离私有属性 和 公开属性
// class 静态属性和方法
class PersonOne {
  private _name: string = 'PersonOne_name';
  
  // 静态属性 可直接调用
  static specialty: string = '唱歌';


  // 静态方法
  static getSpecialty () :string {
    return this.specialty;
  }
  // 私有属性赋值
  set setName (value: string) {
    this._name = value;
  }

  // 私有属性取值
  get getName () {
    return this._name;
  }
}

let personone = new PersonOne();
console.log(personone.getName);
personone.setName = 'personone_name';
console.log(personone.getName);
console.log(PersonOne.specialty);
console.log(PersonOne.getSpecialty());