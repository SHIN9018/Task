/**
 * 프로퍼티 attribute
 * 
 * 1) 데이터 프로퍼티 = 키와 값으로 형성된 실질적 값을 가지고 있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을
 * 가저오거나 설정할때 호출되는 함수로 구성된 프로퍼티
 * 예를 들면 getter setter 같은 거 
 */

const yuJin = {
    name: '안유진',
    year: 2003,
};
//getOwnPropertyDescriptor 특수 속성 구성을 설명하는 객체를 반환
//생성자 함수 or 클래스에 .이 붙어있다 ? 스태틱
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
//{ value: '안유진', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));
//{ value: '안유진', writable: true, enumerable: true, configurable: true }
/**
 * 1) value = 실제 프로퍼티의 값
 * 2) writable = 값을 수정 할 수 있는지 여부, false 로 설정시 값 수정 못함
 * 3)enumerable = 열거 가능한지 여부임. for...in 룹 등을 사용 할 수 있다면
 *                ture를 반환한다
 *  configuranle = 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다
 *                 false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다 
 *                 단, writable이 true인 경우 값 변경과 writable을 변경하는건
 *                 가능하다 
 */ // *********ㄴ외워야 하는 항목 **********

//s를 붙이면 위에는 name 이지만 전부다 가능   
console.log(Object.getOwnPropertyDescriptors(yuJin));
// name: {
//     value: '안유진',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   year: { value: 2003, writable: true, enumerable: true, configurable: true }
// }

const yuJin2 = {
    //1)번과 같은 데이터 프로퍼티    
    name: '안유진',
    year: 2003,

    get age() {
        //getFullYear()년도 값 획득 메서드
        return new Date().getFullYear() - this.year;
    },

    //this year = 데이터 프로퍼티 year 이며 Date()오늘날짜.getFullYear올해년도
    // 에서 - get 으로 받은 age 값 = 출생년도가 year에 재 선언된다.
    set age(age) {
        this.year = new Date().getFullYear() - age;
    },
}
console.log(yuJin2); //{ name: '안유진', year: 2003, age: [Getter/Setter] }
console.log(yuJin2.age); //20

//나이를 재 설정해 get set 같은 액세서 프로퍼티가 잘 작동하는지 확인
yuJin2.age = 32;
console.log(yuJin2.age) //32
console.log(yuJin2.year) //1992

//getOwnPropertyDescriptor = 객체 특성 속성 정보를 가저온다 
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

//Object.defineProperty() 
//정적 메서드는 객체에 새로운 속성을 직접 정의하거나
//이미 존재하는 속성을 수정한 후, 해당 객체를 반환합니다.
Object.defineProperty(yuJin2, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,
})
console.log(yuJin2);
//{ name: '안유진', year: 1992, age: [Getter/Setter], height: 172 }
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'))
//{ value: 172, writable: true, enumerable: true, configurable: true }

yuJin2.height = 180;
console.log(yuJin2); //180

//writable 을 flase로 할경우
Object.defineProperty(yuJin2, 'height', {
        writable: false,
    }),
    console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// 값을 변경 할 수 없다
yuJin2.height = 172;
console.log(yuJin2); //height: 180

/**
 * Enumerable = 열거 가능한가 확인 하는 메소드
 */
console.log(Object.keys(yuJin2)); //[ 'name', 'year', 'age', 'height' ]

//열거가 되기에 for 루프문이 가동이 된다, yujin2 객체 프로퍼티 확인중
for (let key in yuJin2) {
    console.log(key); //name year age height
}
//Object = 객체 생성 객체의 부모(기본템플릿)
//Object로 객체 생성후 defineProperty 메서드를 사용(객체속성 핸들러)
//enumerable: false 로 변경 이제 열거 불가능 조회하면 제외하고 나옴 
Object.defineProperty(yuJin2, 'name', {
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
//{ value: '안유진', writable: true, enumerable: false, configurable: true }\
console.log('_________________________________________________');
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
    console.log(key);
}
console.log(yuJin2); //year, age, height  여기서name은 출력이 안됨
console.log(yuJin2.name); // name은 살아있지만 열거만 안되는 상태이다

/**
 * Configurabel
 */
Object.defineProperty(yuJin2, 'height', {
    configurable: false, //ture에서 수정
    writable: true,
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
//{ value: 180, writable: false, enumerable: true, configurable: false }

//configurable: false인 상태에서 enumerable을 바꾼다 가정
// Object.defineProperty(yuJin2, 'height', {
//     enumerable : false,
// }) // error Connot redefine property: height
//configurable: false 인 상태라 값을 더이상 변경이 불가능하다

Object.defineProperty(yuJin2, 'height', {
    value: 172,
});
// witable 을 true로 수정후 value 값을 172로 수정 
//configurable이 fales 이면 프로퍼티 재정의,삭제 불가능이지만 witable 이 true이기에
// 수정 가능 하다는걸 증명
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
//{ value: 172, writable: true, enumerable: true, configurable: false } 

Object.defineProperty(yuJin2, 'height', {
    writable: false,
});
//configurable: false 임에도 어트리뷰트 ture
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
//{ value: 172, writable: false, enumerable: true, configurable: false }

Object.defineProperty(yuJin2, 'height', {
    writable: true,
}); // configurable : false 일 경우 writable 을 변경 할 수 없다 ! 