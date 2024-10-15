/**
 * copy by value 값에 의한 전달
copy by reference 참조에 의한 전달
1) 기본적으로 모든 primitive 값은 copy by value 이다
2) 객체는 copy by reference 다 
 */

let original = '안녕하세요';
let clone = original;

console.log(original); //안녕하세요
console.log(clone); //안녕하세요

clone += '안유진입니다'
console.log('_________________')
console.log(original);
console.log(clone);

let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj); //{ name: '안유진', group: '아이브' }
console.log(cloneObj); //{ name: '안유진', group: '아이브' }

console.log('_________________________')
// capy by reference 의 예시 
originalObj['group'] = '코드팩토리';
console.log(originalObj); //{ name: '안유진', group: '코드팩토리' }
console.log(cloneObj); //{ name: '안유진', group: '코드팩토리' }

console.log(originalObj === cloneObj); //ture
console.log(original === clone) //faise

// 오브젝트 안 key value 값이 같다고 같은 obj가 아니다 ! 
originalObj = {
    name: '최지호',
    group: '코드팩토리'
};

cloneObj = {
    name: '최지호',
    group: '코드팩토리',
};
console.log(originalObj === cloneObj); //false