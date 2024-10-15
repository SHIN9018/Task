/**
 * Object / 객체 
 */

// key 값과 value 로 이루어 저 있다
// 현재 dance 라는 키의 함수가 저장되어 있다 구동을 기다리는 중
// 여기서 this. 는 자신이 소속되어있는 객체를 뜻함 고로 속한객체의 name 이라는뜻
// 이뜻은 this. = yuJin과 같은맥락
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function () {
        return `${this.name}이 춤을 춥니다.`;
    }
};

console.log(yuJin);
console.log(yuJin.name); // === console.log(yuJin['name'])

// dance 는 함수를 포함하고 있기에 ()를 넣어줘야 작동된다
console.log(yuJin.dance());


//key value 페이 
const nameKey = 'name';
const nameValue = '안유진';
const groupKey = 'group';
const groupValue = '아이브';


// 객체 밖 스코프의 선언된 변수도 []를 입혀 키와 벨류값으로 객체 생성가능 
const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupKey,
    dence: function () {
        return `${this.name}이 춤을 춥니다.`
    }
}
console.log(yuJin2);
console.log(yuJin2.dence());

yuJin2['group'] = '코드팩토리';

//존재 하지 않은 키 값을 입력한다면 ? 
yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2); // ['englishName'] = 'An Yu Jin' 새로 생성됨

// 삭제 하는 법
delete yuJin2['englishName'];
console.log(yuJin2);

// 객체의 특징
// 1) const로 선언 할 경우 객체 자체를 변경 할 수 없다 
// 2) 객체 안에 프로퍼티나 메서드는 변경 할 수 있다
const wonYong = {
    name: '장원영',
    group: '시민',
}
console.log(wonYong); // 잘나옴

//wonYong = {}; // error const 로 선언된 객체는 변경이 안된다

wonYong['group'] = '신승아';
console.log(wonYong); // group 변경 

//모든 키값 다 가저오기
console.log(Object.keys(wonYong)); //[ 'name', 'group' ]

//모든 벨류값 다  가저오기
console.log(Object.values(wonYong)); //[ '장원영', '신승아' ]

// key값 name과 value 값이 같을 경우 아래와 같이 단독 선언으로 사용이 가능
const name = '안유진';
const yuJin3 = {
    //1번과 2번이 똑같다
    name: name,
    name,
};
console.log(yuJin3);