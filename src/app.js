const http = require('http')
const express = require('express')
const path = require('path')
const helmet = require('helmet')

const app = express()
app.use(helmet());

const rootRouter = require('./routes')
app.use('/', rootRouter)

const port = process.env.PORT || 8080

const server = http.createServer(app).listen(port, function() {
    console.log('Running on port:', port)
})

module.exports = server