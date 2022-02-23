// 콜백함수

function add1(a, b) {
    return a + b
}

const add2 = (a, b) => {
    return a + b
}

const add3 = (a, b, callback) => {
    const output = a + b
    callback(output)
}

const result1 = add2(10, 10)
console.log(`더하기 결과 : ${result1}`)

add3(10, 10, (result) => {
    console.log(`콜백함수 안에서 더하기 결과 : ${result}`);
})

const divide = (a, b, callback) => {
    if (b == 0) {
        //console.error(`나누기 할 때 에러 발생.`)
        callback(`나누기할 때 에러 발생.`, null)
        return
    }

    const output = a / b
    callback(null, output)
}

const result2 = divide(10, 10, (err, result) => {
    if (err) {
        console.error(`divide 함수 실행 시 에러 : ${err}`)
        return
    }

    console.log(`나누기 결과 : ${result}`)
})