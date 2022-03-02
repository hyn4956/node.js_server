// 파일의 일부분을 모듈로 분리하기

import http from 'http'
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(cors())

// View 엔진 설정
app.set('views', './views')
app.set('view engine', 'ejs')
console.log(`뷰 엔진 설정됨`)

//app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', express.static('./public'))

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())


// 라우터 등록
const router = express.Router()
app.use('/', router)



// 라우팅 함수 추가
import controller from './controller.js'

import configController from './config_controller.js'

configController.controller.forEach((item, index) => {
    router.route(item.path)[item.method](controller[item.func])
})

//router.route('/list').get(personList)

//router.route('/read').get(personRead)


// 웹서버 시작
import { server_port } from './config.js'

http.createServer(app).listen(server_port, () => {
    console.log(`웹서버 실행됨 : ${server_port}`)

})
console.log(`웹서버 실행 요청함.`)