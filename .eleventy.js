const execSync = require('child_process').execSync
const ampPlugin = require('@ampproject/eleventy-plugin-amp')

module.exports = function(eleventyConfig) {

    //passthrough copy
    eleventyConfig.addPassthroughCopy({
        'assets/logo': 'img/logo'
    })

    //add watch target
    eleventyConfig.addWatchTarget('./src/_styles/')
    eleventyConfig.addWatchTarget('./gulpfile.js/')

    let { Liquid } = require('liquidjs')
    let liquidjsOptions = {
        extname: '.liquid',
        dynamicPartials: true,
        strict_filters: true,
        root: ['src']
    }
    eleventyConfig.setLibrary('liquid', new Liquid(liquidjsOptions))

    // local plugin
    eleventyConfig.addPlugin(require('./plugin/date'))
    eleventyConfig.addPlugin(require('./plugin/shuffle'))

    // build events
    eleventyConfig.on('beforeBuild', function() {
        console.log('Menjalankan tugas pra-build...')
        execSync('npx gulp css', {stdio: 'inherit'})
        console.log('Tugas pra-build selesai.')
    })

    eleventyConfig.on('afterBuild', function() {
        console.log("Tidak ada tugas paska-build.")
    })

    // AMP Plugin
    eleventyConfig.addPlugin(ampPlugin, {
        minifyCSS: false,
        validation: true
    })
   
    // default dirs
    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    }
}