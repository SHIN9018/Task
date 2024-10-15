/**
 * Getter and Setter
 */

class IdolModel {
    name;
    year;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    //1)데이터를 가공해 새로운 데이터를 반환할 떄
    //2)프라이빗한 값을 반환할 떄 
    get nameAndYear() {
        return `${this.name}-${this.year}`;
    }

    set setName(name) {
        //여기서 name은 set의 고유 name 이 아니다 class안의 name
        //set은 this. 해당되지 않는다
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); //{ name: '안유진', year: 2003 }
//get 을 통해 하나의 변수처럼 사용이 가능해진 nameAndYear
//class 에선 함수 모양 처럼 만들었지만 get은 외부에서 쓸 때 변수처럼
console.log(yuJin.nameAndYear); //안유진-2003

yuJin.setName = '장원영';
console.log(yuJin); //IdolModel { name: '장원영', year: 2003 }

//프라이빗 값
class IdolModel2 {
    // 프라이빗 필드
    #
    name;
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    // get()을 통해 프라이빗 값에 접근
    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2.name); // "안유진" (getter를 통해 접근)

yuJin2.name = '장원영'; // setter를 통해 값 변경
console.log(yuJin2.name); // "장원영"