const execSync = require('child_process').execSync
const ampPlugin = require('@ampproject/eleventy-plugin-amp')

module.exports = function(eleventyConfig) {

    //custom collection
    eleventyConfig.addCollection('videoSorted', function(collection) {
        return collection.getFilteredByTag('video').sort(function(a, b) {
            return b.data.publishedAt - a.data.publishedAt
        })
    })

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
        minifyCSS: false
    })
   
    // default dirs
    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    }
}