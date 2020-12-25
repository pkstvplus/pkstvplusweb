const workbox = require('workbox-build')
const chalk = require('chalk')

function main(cb) {
    workbox.injectManifest({
        swSrc: './src/_sw/src.js',
        swDest: './dist/sw.js',
        globDirectory: 'dist',
        globPatterns: [
            '**/logo.png',
            '**/logo-*.png',
            '404.html',
            'offline.html',
            'manifest.json',
            'browserconfig.xml',
            'favicon*.*',
            'android-chrome-*.png',
            'apple-touch-icon.png',
            'mstile-*.png',
            'safari-pinned-tab.svg'
        ]
    }).then(({count, size}) => {
        console.log(chalk.yellowBright(`Service Worker telah ditulis dan akan melakukan precaching untuk ${count} file sebesar ${size} byte.`))
    })
    cb()
}

exports.default = main