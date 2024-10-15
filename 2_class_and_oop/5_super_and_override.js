/**
 * 부모 와 override
 */

class IdolModel {
    name;
    year;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요 ${this.name}입니다`;
    }
}

class FemaleIdolModel extends IdolModel {
    //노래,춤등 특기를 정의 해본다
    part;

    constructor(name, year, part) {
        //super = IdolModel 이클래스에 부모 IdolModel 생성자 함수를 덮을때
        //super = IdolModel의 constructor(name, year)
        //constructor의 상속 같은 느낌이랄까 ? 
        super(name, year);
        this.part = part;
    }
    //super.name 사용 불가 super은 생성자 함수에만 가능 
    sayHello() {
        //return `안녕하세요 ${this.name}입니다 ${this.part}를 `
        //하찌매애애앤~~~ spuer는 함수는 가능 ;;
        return `${super.sayHello()} ${this.part}를 맡고 있습니다`
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬')
console.log(yuJin); //FemaleIdolModel { name: '안유진', year: 2003, part: '보컬' }

//새로운 인스턴스 만든후 새로추가한 함수 구동확인
const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung.sayHello()); //안녕하세요 장원영입니다

//부모 IdolModel에 새로추가한 함수가 FemaleIdolModel에 상속을 줘서
//sayHello 함수 작동 가능 ㅅㅅ
console.log(yuJin.sayHello());