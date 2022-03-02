// 라우팅 함수 추가하기

const http = require('http')
const express = require('express')

const app = express()

// 라우터 등록
const router = express.Router()
app.use('/', router)

// 라우팅 함수 추가
router.route('/list').get((req, res) => {
    console.log(`/list 요청됨`)

    const output = {
        code : 200,
        message : 'OK',
        data : [
            {
                name : '홍길동1',
                age : 21
            }
        ]
    }

    const outputStr = JSON.stringify(output)

    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
    res.end(outputStr)
})




// 웹서버 시작
const port = 7001
http.createServer(app).listen(port, () => {
    console.log(`웹서버 실행됨 : ${port}`)

})
console.log(`웹서버 실행 요청함.`)