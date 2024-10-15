/**
 * Prototype
 */
const testObj = {}
console.log(testObj.__proto__); //[Object: null prototype] {}

//__proto__ 모든 객체에 존재하는 프로퍼티다
// class 강의에서 배울 때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__);

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype); //{} 프로토타입 객체 생성

//숨겨진 프로토타입 객체 발견
// console.dir(IdolModel.prototype, {
//     showHidden: true,
// });
//<ref *1> {
//  [constructor]: [Function: IdolModel] {
//    [length]: 2,
//    [name]: 'IdolModel',
//    [arguments]: null,
//    [caller]: null,
//    [prototype]: [Circular *1]
//  }
//}

//cirular reference 서로가 서로를 참고 하는 상태임
console.log(IdolModel.prototype.constructor === IdolModel); //true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype)

const yuJin = new IdolModel('안유진', 2003);

console.log(yuJin.__proto__); //{}
console.log(yuJin.__proto__ === IdolModel.prototype); //ture

console.log(testObj.__proto__ === Object.prototype);

console.log(IdolModel.__proto__ === Function.prototype) //true
console.log(Function.prototype.__proto__ === Object.Function) //true
console.log(IdolModel.prototype.__proto__ === Object.prototype) // ture
//IdoModel 의 부모 > Function / Function.prototype 부모 > Object

/**
 * 정리
 * IdolModel 함수가 this를 통해 프로토타입 객체를 생성함
 * 그 idolModel을 기반으로 new 를 사용해 yujin이 만들어짐 > 프로토타입 객체가 생성
 * 생성된 yujin의 프로토타입은 IdolModel 기반이기에 IdolModel의 프로토타입 객체와
 * 완전동일하다 볼 수 있다d
 */