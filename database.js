import mariadb from 'mariadb'
import { database_options } from './config.js'

export class Database {

    constructor() {
        this.pool = mariadb.createPool(database_options)
    }

    excute(sql, sqlParams) {
        return new Promise(async (resolve, reject) => {
            let conn
            let rows
            try {
                conn = await this.pool.getConnection() 
                
                //const sql = `select id, name, age from test.person`
                rows = await conn.query(sql, sqlParams)
                console.log(`SQL 실행 결과 : ${JSON.stringify(rows)}`)
            }catch (err){
                console.error(`에러발생 : ${err}`)
                reject(`에러발생 : ${err}`)
            } finally {
                if (conn) { conn.end() }
            }

            resolve(rows)
        })
    }
}
