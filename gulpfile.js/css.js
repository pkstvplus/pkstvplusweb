require('dotenv').config
const {src, dest} = require('gulp')
const pipeline = require('readable-stream').pipeline

// SASS Compiler task
const sass = require('gulp-sass')
sass.compiler = require('sass')
const replace = require('gulp-replace')
const postcss = require('gulp-postcss')
const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const importcss = require('postcss-import-url')

function main() {
    const SRC = './src/_styles/main.scss'
    const DEST = './src/_includes/css/'

    const processors = [
        tailwind,
        importcss({modernBrowser: true}),
        autoprefixer
    ]

    return pipeline(
        src(SRC),
        sass(),
        postcss(processors),
        replace('!important', ''),
        dest(DEST)
    )
}

exports.default = main