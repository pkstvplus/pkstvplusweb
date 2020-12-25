const execSync = require('child_process').execSync
const chalk = require('chalk')
const ampPlugin = require('@ampproject/eleventy-plugin-amp')

module.exports = function(eleventyConfig) {

    //passthrough copy
    eleventyConfig.addPassthroughCopy({
        'assets/logo': 'img/logo',
        'assets/icons': '.',
        'assets/static': '.'
    })

    //add watch target
    eleventyConfig.addWatchTarget('./src/_styles/')
    eleventyConfig.addWatchTarget('./src/_sw/')
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
    eleventyConfig.addPlugin(require('./plugin/eleventy/date'))
    eleventyConfig.addPlugin(require('./plugin/eleventy/shuffle'))

    // build events
    eleventyConfig.on('beforeBuild', function() {
        console.log(chalk.hex('#FF5000')('Menjalankan tugas pra-build...'))
        execSync('npx gulp css', {stdio: 'inherit'})
        console.log(chalk.hex('#FF5000')('Tugas pra-build selesai.'))
    })

    eleventyConfig.on('afterBuild', function() {
        console.log(chalk.hex('#FF5000')('Menjalankan tugas post-build...'))
        execSync('npx gulp sw', {stdio: 'inherit'})
        console.log(chalk.hex('#FF5000')('Tugas post-build selesai.'))
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