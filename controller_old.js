

import mariadb from 'mariadb'

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

const personList = async (req, res) => {
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
}

const personRead = async (req, res) => {
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
}

export {
    personList,
    personRead
}
