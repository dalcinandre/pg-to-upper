'use strict'

const fs = require('fs')
const keys = require('./keys')

let params = process.argv

fs.readFile(params[2], (err, data) => {
    if (err) throw err

    let reg = new RegExp(keys.map(l => '\\b' + l.toLowerCase() + '\\b').join('|'), 'g')

    console.log(data.toString().replace(reg, key => key.toUpperCase()))
})

