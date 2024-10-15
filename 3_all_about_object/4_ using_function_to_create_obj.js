/**
 * Using function to create objects
 * 함수로 오브젝트 만들~기
 */
//기본적인 함수로 오브젝트 만들기
//아래는 오브젝트(객체)를 생성하는 생성자 함수이다

function IdolModel(name, year) {
    //new 키워드 없이 호출되면 undifind가 나온다 그걸 방지하는 기능
    //함수는 늘 true가 나온다 하지만 아래 조건에 의하면 !new
    //즉 !new = new가 아닐때 실행되며 return 으로 new 오브젝트를
    //불러서 실행한다
    if (!new.target) {
        return new IdolModel(name, year);
    }

    this.name = name;
    this.year = year;

    this.dance = function () {
        return `${this.name} 이 춤을 춥니다.`
    }
}
const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin); //IdolModel { name: '안유진', year: 2003 }
console.log(yuJin.dance());

//new를 사용하지 않고 함수식으로 한다면 ? 
const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2); //언디파인드 뜸
//this 키워드를 사용해서 선언을 할 경우 값이 global에 저장되어 설정하게 된다

//global 파일이 실행 할 때 자동으로 생성되는 객체
//js 엔진을 node.js에서 실행할때 필요한 엔진을 가지고 있다
//console.log(global.name) //안유진

//생성자 함수로 생성자 함수가 되는지 실험
const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};

const yuJin3 = IdolModelArrow('안유진', 2003);
// 에러 생성자 함수는 화살표함수가 안된다