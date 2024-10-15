//데이터 타입이 지정되면 그 타입에 맞는 데이터가 대입되어야 한다.
let data : number = 10
data = 'hello' // error 넘버 타입이 아닌 스트링타입이 들어옴

//any 타입.. 모든 타입의 데이터 대입 가능 권장은 하지 않음
let data1 : any = 10
data1 = 'hello'
data1 = true
data1 = {}
//any는 모든 타입이 가능함

//타입 유추 기법도 제공된다 변수 선언시 타입을 지정하지 않고 대입되는 
//데이터로 타입을 유추한다
//js 와 다르다 js 처럼 사용 하는 것은 any 
// 개발자가 타입을 지정하지 않을 뿐 초기 데이터에 의해 타입이 고정된다
let data2 = 10
data2 = 20
//data2 = 'hello' // 위에 이미 10 으로 넘버 타입이 되었기에 string은 불가능

//void 도 타입임으로 변수 타입으로 지정이 가능하지만
//언디파인드만 대입이 가능함으로 변수 타입으로 사용하는 것은 의미가 없다
let data3: void = undefined
data3 = null//errorr
data3 = 10//error

//void는 함수의 리턴 타입이다
function f1(): number {
    //return 값이 넘버가 되어야 함
    return 10
}
function f2():void {
    //return 10//error 리턴 타입이 함수가 아님 
}


//npx tsc main.ts 로 컴파일 시켜서 테스트

//generic
//타입을 지정해야 하는 곳에서 형식타입으로 선언하고
//이후에 이용하는 곳에서 구체적인 타입을 지정해서 사용하는 기법
//배열이 generic으로 선언
let a1:Array<number> = [10, 20]
let a2:Array<string> = ['hello', 'world']

//함수 선언 가정
function myFun1(arg1:number) {}
myFun1(10) // 함수의 매개변수가 number 타입으로 고정

//함수를 만드는 개발자 입장에서 타입을 고정하지 않고 이후
//number 혹은 string 등 다양한 타입으로 이용되게 하고자 한다면 ? 
//타입이 없을 수는 없다 고정 시킬수도 없다 형식 타입으로 선언한다

//무슨 타입이 올지 모르기에 <> 을 사용함으로 대비 한다
function myFun2<T>(arg: T) {}
myFun2<number>(10)
myFun2<string>('hello')

//형식타입을 여러개 그 때 맞게끔 선언 가능 t는 임의 알파벳일 뿐
// <>제네릭 안에는 중복 선언이 가능하다
function myFun3<T, A>(arg1: T, arg2: A){};
myFun3<number, string>(10, 'hello') // 임의 T A 를 각각 넘버와 스트링으로 변환시켜 사용

//typealias .. type 이라는 예약어로 개발자 임의 이름 타입을 선언
//주로 쓰는 상황을 재현
let b1 : {id : number, name : string}
b1 = {id: 10, name:'kim'}
let b2 : { id : number, name : string}
//길게 타입이 지정되는데 그 형식의 타입이 계속 반복 지정되는경우
type MyObjectTyep = { id : number, name : string}
let b3: MyObjectTyep = {id: 10, name:'kim'}

//Optional = 생략 가능한 데이터 주로 함수의 매개변수, 객체의 멤버이다
function some (arg1 : number, arg2: number){}
some(10)// error 타입이 안맞다 함수의 매개변수의 갯수 및 순서를 맞춰서 호출해야함
some(10, 20)

//함수의 매개변수를 선언하긴 하는데 데이터를 주지 않아도 되는 매개변수가 있다면
// ?는 뭐가 올진 모르겠지만 일단 number 로 와야 한다는 뜻
function some1(arg1?:number, arg2?:number){}
some1()
some1(10)
some1(10,20)// 전부 에러 없이 잘 작동

// 함수의 매개변수에 default(전달 안될 떄 기본 값) 을 지정하면
// 그 매개변수 값이 전달이 안되었다 하더라도 값을 가지는 것으로 
//optional로 선언 불가능
function some2(arg1:number =0, arg2:number = 0){}
some2()
some2(10)
some2(10,20)//문제 없음

//optional 함수 매개변수 뿐만 아니라 object literal 멤버에도 자주 이용
let obj1:{id:number,name:string,grade?:string}
obj1 = {id:10,name:'kim'}// grade는 ?이 붙어서 옵셔널 상태 지정 안해도 무관

// 두개의 별개 타입이 있다 따로따로 가치가 있다면
// 어떤 경우도 두 타입을 연결해 사용하고 할 떄
type TypeA = {id: number, name:string}
type TypeB = {age: number,address: string}
let obj2 = TypeA & TypeB 