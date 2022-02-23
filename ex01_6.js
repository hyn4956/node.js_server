// 배열

let names = ['홍길동1', '홍길동2', '홍길동3']
console.log(`names 원소의 갯수 : ${names.length}`)
console.log(`names의 두번째 원소 : ${names[1]}`)

console.log(`names의 자료형 : ${typeof(names)}`)
console.log(`배열인가요? : ${Array.isArray(names)}`)

names.forEach((value, index) => {
    console.log(`names의 원소 #${index} : ${value}`)
})

const nameSizes = names.map((value) =>{
    return value.length
})
console.log(`nameSizes : ${JSON.stringify(nameSizes)}`)

const animal1 = {
    name : '미미1',
    age : 2
}

console.log(`이름 : ${animal1.name}`)
console.log(`이름 : ${animal1['name']}`)