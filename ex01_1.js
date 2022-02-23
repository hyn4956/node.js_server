// 콘솔 출력
console.log('안녕하세요.');

// 변수
var name1 = '홍길동1';
let name2 = '홍길동2';
name2 = '홍길동3';

const name3 = '홍길동4';
console.log('name2 : ' + name2);
console.log(`name3 : ${name3}`);

let person1 = {
    name : '홍길동1',
    age : 20
}

console.log(`person1의 이름 : ${person1.name}`);

let person2 = {
    name : '홍길동2',
    walk : function(){
        console.log(`person2가 걸어갑니다.`);
    }
}
console.log(`person2의 이름 : ${person2.name}`);

//함수
function add1(a, b) {
    return a + b
}

let result1 = add1(10, 10)
console.log(`result1 : ${result1}`);

let add2 = (a, b) => {
    return a + b
}

let result2 = add2(10, 10)

console.log(`result2 : ${result2}`);

const person3 = {
    name : '홍길동3',
    walk : () => {
        console.log(`person2가 걸어갑니다.`);
    }
}

person3.name = '홍길동4'
console.log(`person3의 이름 : ${person3.name}`);

//클래스
class Fish {
    //name = '홍길동1'
    //age = 20

    //constructor를 활용하여 name과 age를 바로 정해주면 위 변수를 설정하지 않아도 된다.
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    wlak() {
        console.log(`붕어빵이 걸어갑니다.`);
    }
}

let fish1 = new Fish()
console.log(`fish1의 이름 : ${fish1.name}`);

let fish2 = new Fish()
fish2.name = '홍길동22'
console.log(`fish2의 이름 : ${fish2.name}`);

let fish3 = new Fish('홍길동2', 22)
console.log(`fish3의 이름 : ${fish3.name}`);

let name4
let name5 = '홍길동5'
let name6 = 21
console.log(`name4 : ${typeof(name4)}`);
console.log(`name5 : ${typeof(name5)}`);
console.log(`name6 : ${typeof(name6)}`);

let name7 = null
console.log(`name7 : ${typeof(name7)}`);

let person1Str = JSON.stringify(person1);
console.log(`person1 : ${person1Str}`);

let person1Out = JSON.parse(person1Str);
console.log(`person1의 이름 : ${person1Out.name}`);