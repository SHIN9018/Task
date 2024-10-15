/**
 * Static Keyword 
 */
//클래스를 생성하게 되고 new 를 통해 인스턴스를 만들 떄 
//클래스 객체에 있는 멤버들 아래 예시 name year 등은 
//new 선언과 동시에 같이 생성이 되지만 static은 
//class 객체 내에만 귀속 되어 있는 상태로 static의 효과이다 


class IdolModel {
    name;
    year;
    class 자체에 귀속되는 키워드
    static groupName = '아이브'


    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static returnGroupName() {
        return '아이브'
    }

    static returnGroupName() {
        return '아이브';
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);

console.log(IdolModel.groupName); //'아이브'
console.log(IdolModel.returnGroupName()); //아이브

/**
 * factory constructor
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(object) {
        return new IdolModel(
            object.name,
            object.year,
        );
    }

    static fromList(list) {
        return new IdolModel(
            list[0],
            list[1],
        )
    }
}

const yuJin2 = IdolModel.fromObject({
    name: '안유진',
    year: 2003,
});
console.log(yuJin2);
const wonYoung = IdolModel.fromList(
    [
        '장원영',
        2003,
    ]
);
console.log(wonYoung)