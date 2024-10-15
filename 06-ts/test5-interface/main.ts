// 인터페이스 

// 인터페이스는 키워드를 사용해서 정의 한다
// js 에서 class 와 비슷함 
interface Student {
    //아래처럼 키 와 타입을 정의 한다 
    name : string;
    age : number;
    grade : number 

}

//인터페이르를 사용하는 객체 만들기
const Student1: Student = {
    name:"홍길동",
    age:15,
    grade:9,
}
const Student2 : Student = {
    name:"신승아",
    age:27,
    grade:10,
}

//함수에서 인터페이스 사용하기
//인터페이스를 함수의 매개변수 타입으로 사용할 수 있다
// 아래와 같이 활용하면 함수가 특정 구조의 객체만 받을 수 있게 된다

//함수 선언 (매개변수) 값을 student으로 주고 type을 위에 선언한 interface로 선언
//그럼 매개변수의 studnet는 인터페이스의 키워드 형식을 따라서 사용해야함
function printStudentInfo(student: Student) : void {
    console.log(`이름: ${student.name}, 나이:${student.age}, 학년:${student.grade}`)
}
printStudentInfo(Student1)//이름: 홍길동, 나이: 15, 학년: 9학년

// 선택적 속성
interface car