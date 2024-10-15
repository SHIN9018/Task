/**
 * Immutable Object = 불변의 객체 변경 못하는 객체
 * 매우 매우 매우 중요함
 */

const yuJin = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date.getFullYear() - age;
    }
}
console.log(yuJin); //{ name: '안유진', year: 2003, age: [Getter/Setter] }

/**
 * Extensible
 */
console.log(Object.isExtensible(yuJin));
//ture 기본적으로 생성시에는 Extensible true

//Object.preventExtensions 객체의 새로운 속성이 증가 하는것을 방지
Object.preventExtensions(yuJin);
console.log(yuJin) //false

yuJin['position'] = 'vocal';

yuJin['groupName'] = '아이브';
console.log(yuJin);
//{ name: '안유진', year: 2003, age: [Getter/Setter] } 
//isExtensible로 인해 값이 추가가 안된다 삭제는 됨

delete yuJin['position'];
console.log(yuJin); // 삭제는 가능하되 추가는 안된다

/**
 * Seal , 중요함 자주 씀 편지 쓰고 붙이는것
 */
const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date.getFullYear() - age;
    }
}

console.log(Object.isSealed(yuJin2)); //false 씰 처리 안된상태 확인
//봉인법 봉인 !!!!!!!!!!!!!!!!
Object.seal(yuJin2);

console.log(Object.isSealed(yuJin2)) //true 봉인완료

yuJin2['groupName'] = '아이브';
console.log(yuJin2); //{ name: '안유진', year: 2003, age: [Getter/Setter] }
//seal 의 봉인으로 인해 속성이 추가가 안된다람쥐

//삭제는 되는지 확인 해보자
delete yuJin2['name'];
console.log(yuJin2) // 삭제도 안됨 에러도 안나온다 중요 . 봉인 !!

//프로퍼티 에트리뷰트 변경 가능한지 seal을 할경우 !
Object.defineProperty(yuJin2, 'name', {
    value: '코드팩토리',
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
//{value: '코드팩토리', writable: true, enumerable: true, configurable: false}
//안유진에서 > value: 값이 '코드팩토리' 로변경됨 
//writable 도 seal로 봉인해도 변경이 가능함
//seal은 사실상 configurable을 false로 한 효과와 동일하다 

/**
 * Freezed = 동결 시키다
 * 
 * 읽기 외에 모든 기능을 불가능하게 한다
 */

const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date.getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3)); // false

Object.freeze(yuJin3); // 동결 !!!!!!!!!!!!!!!!!!!!!!
console.log(Object.isFrozen(yuJin3)) //true

yuJin3['groupName'] = '아이브';
console.log(yuJin3); // 추가가 안됐음

delete yuJin3['name'];
console.log(yuJin3); // 이것도 당연히 안됨

// Object.defineProperty(yuJin3, 'name' {
//     value: '코드팩토리'
//}) // 에러남 읽을 수 없다고 나옴 동결 된 상태이기에 기능구현 x
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));
//{value: '안유진',writable: false,enumerable: true,configurable: false}
//writable, configurable 이 false 로 변한다

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4)); //true
console.log(isFrozen(yuJin4['wonYoung'])); //false
//상위 obj가 얼었다고 하위 obj 까지 얼지 않는다 seal 도 마찬가지


/**
 * Extensible = 객체 속성 증가 방지
 * seal = 객체 내부 속성 수정,삭제 방지 어트리뷰트는 가능
 * freeze = 위에 둘다 안됨 하지만 하위 obj가 있다면 그 obj는 동결x
 */