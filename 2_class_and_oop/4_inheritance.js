/**
 * 상속 !
 * 
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
// 상속을 받을땐 extends를 입력후 상속받을 부모 클래스명 입력
class FemaleIdolModel extends IdolModel {
    dance() {
        return '여자 아이돌이 춤을 춥니다';
    }
}

class maleIdolModel extends IdolModel {
    sing() {
        return '남자 아이돌이 노래를 부릅니다';
    }
}

//FemaleIdolModel에 arg가 정의 되어 있지 않지만 
//부모 IdolModel의 constructor로 인해 상속받아 arg 사용 가능
const yuJin = new FemaleIdolModel('안유진', 2003)
console.log(yuJin); //FemaleIdolModel { name: '안유진', year: 2003 }

const jiMin = new maleIdolModel('지민', 1995)
console.log(jiMin);

//1.const yuJin 을 통해 정의를 함과 동시에 FemaleIdolModel은
//2.부모 class 를 상속받아 ('안유진', 2003) 기능을 활용하게 됨
//그리고 아래와 같이 출력하면 1,2의 행동으로 저장된 메모리가 출력됨
console.log(yuJin.dance()); //여자 아이돌이 춤을 춥니다

console.log(jiMin.sing());
console.log(jiMin.year); // 잘됨

// FemaleIdolModel에는 sing이 정의되어있지않기에 에러
//IdolModel에 정의 되어있다면 상속받기에 가능
//console.log(yuJin.sing())

const cf = new IdolModel('코드팩토르', 1992);
console.log(cf);

//부모 클래스는 자식 클래스를 상속 받을 수 없다는 예시
console.log(dance()); // 안됨 cf는 IdolModel로 인스턴트를 만들었기에

//instanceof class명 = 부모가누구야 ? 니 애비가 누구야 
console.log(yuJin instanceof IdolModel); //ture
console.log(yuJin instanceof FemaleIdolModel); //ture
console.log(yuJin instanceof maleIdolModel); //false