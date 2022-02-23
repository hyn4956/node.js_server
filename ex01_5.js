// 비동기

const add = (a, b, callback) => {
    setTimeout(() => {
        const output = a + b
        callback(null, output)
    }, 500)
}

add(10, 10, (err, result)=>{
    if (err) {
        console.error(`에러 발생 : ${error}`)
        return
    }

    console.log(`더하기 결과 : ${result}`)
})
console.log(`더하기 함수 실행됨`)

const divide = (a, b, callback) => {
    setTimeout(() => {
        if (b == 0) {
            callback(new Error(`두번째 파라미터가 0입니다.`), null)
            return
        }

        const output = a / b
        callback(null, output)
    }, 1000)
}

divide(200, 100, (err, result)=>{
    if (err){
        console.error(`나누기할 때 에러 발생 : ${err}`)
        return
    }

    console.log(`나누기 결과 : ${result}`)
})
console.log(`나누기 함수 실행됨`)

const doCalc1 = () => {
    divide(200, 100, (err, result)=> {
        if (err) {
            console.log(`나누기 할 때 에러 발생 : ${err}`)
            return
        }

        console.log(`doCalc1에서 나누기 결과 : ${result}`)

        add(result, 100, (err2, result2) =>{
            if(err2) {
                console.log(`더하기 할 때 에러 발생 : ${err2}`)
                return
            }

            console.log(`doCalc1에서 더하기 결과 : ${result2}`)
        })
    })
}

doCalc1()

// 프로미스를 사용해서 여러 개의 비동기 함수를 순서대로 실행하기
// (콜백함수를 사용해도 되지만 여러개의 연속되는 콜백함수를 쓸 경우에는 정말 가독성도 떨어지고 비효율적이기 때문에 프로미스를 사용한다.)

const addFunc = (a, b) => new Promise((resolve, reject) => {
    add(a, b, (err, result) => {
        if(err) {
            reject(err)
        }

        resolve(result)
    })
})

const divideFunc = (a, b) => new Promise((resolve, reject) => {
    divide(a, b, (err, result) => {
        if (err) {
            reject(err)
        }

        resolve(result)
    })
})

const doCalc2 = async () => {
    try {
        const result1 = await divideFunc(200, 100)
        console.log(`doCalc2에서 나누기 결과 : ${result1}`)

        const result2 = await addFunc(result1, 100)
        console.log(`doCalc2에서 더하기 결과 : ${result2}`)
    } catch(err) {
        console.error(`doCalc2에서 에러 발생 : ${err}`)
    }
}
doCalc2()