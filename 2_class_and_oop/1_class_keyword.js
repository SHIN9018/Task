/**
 * class keyword
 * 클래스 정의 특정객체 생성을 위한 변수와 메소드(함수)를 정의 하는
 * 일종의 틀이다 
 * 한줄요약 = 정보를 일반화해서 정리하는 방법이다 !
 */

//클래스 생성 주로 공통된 정보를 클래스를 통해..(공장설립)
class IdolModel {
    //프로퍼티(함수,변수)
    name;
    year;
    //생성자 함수
    constructor(name, year) {
        //this.name = class객체 내 name 그래서 this가 있다
        //name = 파라미터로 외부에서 받은 name 
        //name; 속성(프로퍼티)를 정의 할 필요 없다 . 옵셔널이다
        //year; 웬만하면 정의를 해준다 

        this.name = name;
        this.year = year;
    }
    //funtion 없이 ()를 통해 함수로 정의
    sayName() {
        return `안녕하세요 저는 ${this.name}입니다`;
    }
}

// class를 이용하기 위한 new 사용 idolModel은 이제 단순 변수가 아닌
//class 객체 정보를 담고 있다
//만들어진 인스턴스들 
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); //IdolModel { name: '안유진', year: 2003 }
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul); //IdolModel { name: '가을', year: 2002 }

//인스터스 값 접근 .을 사용한다
console.log(yuJin.name); //안유진
console.log(yuJin.year); //2003

console.log(yuJin.sayName()); //안녕하세요 저는 안유진입니다

//class는 함수이다
console.log(typeof IdolModel); //function
console.log(typeof yuJin); //object