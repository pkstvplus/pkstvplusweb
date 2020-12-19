// Clean output folder task
const del = require('del')

function clean(cb) {
    del(['dist', 'debug.log', 'src/_includes/css/main.css'])
    cb()
}

exports.cleanTask = clean