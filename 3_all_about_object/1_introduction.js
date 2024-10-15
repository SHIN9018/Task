/**
 * All about objects
 * 
 * 객체를 선언할 때 사용 할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화 해서 생성 - class와 oop
 * 3) function을 사용해서 객체 생성 - 가장 근본 오래됨
 */

const yuJin = {
    name: '안유진',
    year: 2003,
}
console.log(yuJin); // 1번 방식 { name: '안유진', year: 2003 }

class IdolModel {
    name;
    year;
    constructor(name, year) {
        this.name = name
        this.year = year
    }
}
//2번 방식 IdolModel { name: '안유진', year: 2003 }
console.log(new IdolModel('안유진', 2003));

function IdolFunction(name, year) {
    this.name = name;
    this.year = year
}

//3번째 방식 '생성자 함수' 함수에 this를 넣어야 가능 new 객체를 부를 수 있다
const gaEul = new IdolFunction('가을', 2002);
console.log(gaEul); //IdolFunction { name: '가을', year: 2002 }