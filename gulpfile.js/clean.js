// Clean output folder task
const del = require('del')

function main(cb) {
    del(['dist', 'debug.log', 'src/_includes/css/main.css'])
    cb()
}

exports.default = main