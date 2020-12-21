module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter('shuffle', require('./shuffle'))
}