
import { Database } from './database.js'
const database = new Database()

import sql from './sql.js'

const personList = async (req, res) => {
    console.log(`/list 요청됨`)

    // 데이터베이스에서 조회하기
    try {
        //const sql = `select id, name, age from test.person`
        const sqlParams = []
        const rows = await database.excute(sql.person_list, sqlParams)

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

    }
}

const personRead = async (req, res) => {
    console.log(`/read 요청됨`)

    const params = req.query
    console.log(`요청 파라미터 : ${JSON.stringify(params)}`)

    // 데이터베이스에서 조회하기
    let conn
    try {
        const sqlParams = [
            params.id
        ]

        const rows = await database.excute(sql.person_read, sqlParams)

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
}


const personInsert = async (req, res) => {
    console.log(`/insert 요청됨`)

    const params = req.body //body안에 넣어줘야함 (post방식이기 때문)
    console.log(`요청 파라미터 : ${JSON.stringify(params)}`)

    // 데이터베이스에서 조회하기
    let conn
    try {
        const sqlParams = [
            params.name,
            params.age
        ]
        const rows = await database.excute(sql.person_insert, sqlParams)
        
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
}

const personIndex = async (req, res) => {
    console.log(`/personIndex 요청됨`)

    const params = req.query
    console.log(`요청 파라미터 : ${JSON.stringify(params)}`)

    const context = {
        username : '홍길동1'
    }
    req.app.render('person_index', context, (err, html) => {
        if (err) {
            console.error(`뷰 렌더링 중 에러 : ${err}`)
            return
        }

        console.log(`렌더링 결과 : ${html}`)
        res.end(html)
    })
}

const coffeeshopRead = async (req, res) => {
    console.log(`/coffeeshopRead 요청됨`)

    const params = req.query
    console.log(`요청 파라미터 : ${JSON.stringify(params)}`)

    // 데이터베이스에서 조회하기
    let conn
    try {
        const sqlParams = [
            
        ]

        const rows = await database.excute(sql.coffeeshop_read, sqlParams)

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
}

export default{
    personList,
    personRead,
    personInsert,
    personIndex,
    coffeeshopRead
}
