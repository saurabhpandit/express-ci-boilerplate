const http = require('http')
const express = require('express')
const path = require('path')
const helmet = require('helmet')

const app = express()
// use helmet to protect your app from known vulnerabilities
app.use(helmet());

// Add resource routers here or in rootRouter
const rootRouter = require('./routes')
app.use('/', rootRouter)

const statusRouter = require('./routes/status')
app.use('/status', statusRouter)

const port = process.env.PORT || 8080

const server = http.createServer(app).listen(port, function() {
    console.log('Running on port:', port)
})

module.exports = server