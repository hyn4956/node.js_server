// 라우팅 함수 추가하기

const http = require('http')
const express = require('express')

const app = express()

// 미들웨어 등록
app.use((req, res, next) => {
    console.log(`첫번째 미들웨어 호출됨.`)
    
    next()
})

app.use((req, res, next) => {
    console.log(`두번째 미들웨어 호출됨.`)

    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
    res.end('<h1>웹서버로부터의 응답</h1>')
})


// 웹서버 시작
const port = 7001
http.createServer(app).listen(port, () => {
    console.log(`웹서버 실행됨 : ${port}`)

})
console.log(`웹서버 실행 요청함.`)