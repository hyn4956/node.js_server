// 라우팅 함수 추가하기

const http = require('http')
const express = require('express')

const mariadb = require('mariadb')

// DB 연결 풀 생성
const pool = mariadb.createPool({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'admin',
    database : 'test',
    connectionLimit : 10,
    debug : false
})

const app = express()

// 라우터 등록
const router = express.Router()
app.use('/', router)

// 라우팅 함수 추가
router.route('/list').get(async (req, res) => {
    console.log(`/list 요청됨`)

    // 데이터베이스에서 조회하기
    let conn
    try {
        conn = await pool.getConnection() 
        
        const sql = `select id, name, age from test.person`
        const rows = await conn.query(sql, [])
        console.log(`SQL 실행 결과 : ${JSON.stringify(rows)}`)

        const output = {
            code : 200,
            message : 'OK',
            data: rows
        }

        const outputStr = JSON.stringify(output)

        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
        res.end(outputStr)
    } catch(err) {
        console.error(`에러 발생 : ${err}`)

        const output = {
            code : 400,
            message : `에러 발생 : ${err}`
        }

        const outputStr = JSON.stringify(output)

        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
        res.end(outputStr)

    } finally {
        if (conn) {
            conn.end()
        }
    }
})

// read 라우팅 함수 추가
router.route('/read').get(async (req, res) => {
    console.log(`/read 요청됨`)

    const params = req.query
    console.log(`요청 파라미터 : ${JSON.stringify(params)}`)

    // 데이터베이스에서 조회하기
    let conn
    try {
        conn = await pool.getConnection() 
        
        const sql = `select id, name, age 
                    from test.person
                    where id = ${params.id}`
        const rows = await conn.query(sql, [])
        console.log(`SQL 실행 결과 : ${JSON.stringify(rows)}`)

        const output = {
            code : 200,
            message : 'OK',
            data: rows
        }

        const outputStr = JSON.stringify(output)

        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
        res.end(outputStr)
    } catch(err) {
        console.error(`에러 발생 : ${err}`)

        const output = {
            code : 400,
            message : `에러 발생 : ${err}`
        }

        const outputStr = JSON.stringify(output)

        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
        res.end(outputStr)

    } finally {
        if (conn) {
            conn.end()
        }
    }
})


// 웹서버 시작
const port = 7001
http.createServer(app).listen(port, () => {
    console.log(`웹서버 실행됨 : ${port}`)

})
console.log(`웹서버 실행 요청함.`)