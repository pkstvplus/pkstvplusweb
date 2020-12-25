require('dotenv').config()

const current_env = process.env.ELEVENTY_ENV
const PROD_ENV = 'prod'
const prodUrl = 'https://pkstvplus.netlify.app'
const devUrl = 'http://localhost:8888'
const baseUrl = current_env === PROD_ENV ? prodUrl : devUrl
const isProd = current_env === PROD_ENV

module.exports = {
    current_env,
    isProd,
    title: "PKS TV Plus",
    short_title: "TV+",
    description: "Bersama Melayani Rakyat",
    logo: `${baseUrl}/img/logo/logo.png`,
    logo_dark: `${baseUrl}/img/logo/logo-dark.png`,
    url: baseUrl
}