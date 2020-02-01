const express = require('express')
const router = express.Router()
const { version, description, name } = require('../../package.json')

let statusRes = {}
statusRes[name] = [
    {
        version: version,
        description: description,
        lastcommitsha: 'not set'
    }
]

router.get('/', function (req, res) {
    res.send(statusRes)
})

module.exports = router
