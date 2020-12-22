require('dotenv').config()
const Cache = require('@11ty/eleventy-cache-assets')
const _ = require('lodash')

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const CHANNELS = [
    'UC5BMIWZe9isJXLZZWPWvBlg', // Kompas TV
    'UCoSkllfpgmFHtbVK835QaQg', // iNews
    'UCmxAIW7RDDC88EPk4ry16Kg', // Tribunnews
    'UCER4rvDnRBPr_ncYW4UCZjg', // tvOne
    'UCKII0Ml9S5wneKbHswmUrIQ', // CNN ID
    'UCzl0OrB3-ehunyotIQvK77A', // Metro TV
    'UCuMAjEaSMj7q7YLf0xW1MjQ', // detik.com
    'UCPvi3d3MAILSVKRIU_1Mnkg', // Pikiran Rakyat
    'UCm2Fz7aL464TC_0uG_yagng', // kumparan
    'UCHYuEi41c1RcoTf8NgJLdkg', // JPNN
    'UCPX1dLgx2JfnPa_J5yaXEpw', // Medcom
    'UCK6c4qk3hRaa6fMIEZrhiXQ', // Tribun Timur
    'UC_4JrNf_huJPquzPDtf88mw', // Okezone
    'UCQA6NejSxQguRkD3L8eXHzA', // iNews.id
    'UC1QpnGo11epfexw1bIiTHTg', // Liputan 6

]

async function getData(id) {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&q=pks%7Cpartai%20keadilan%20sejahtera%20-ruu%20-kekerasan%20-seksual%20-gelora%20-fahri&maxResults=10&order=date&type=video&videoSyndicated=true&videoEmbeddable=true&key=${YOUTUBE_API_KEY}`
    let data = await Cache(url, {
        duration: '1d',
        type: 'json'
    })
    return data
}

function exportData() {
    return new Promise((resolve, reject) => {
        const promises = []
        let source = CHANNELS
        let exportedData = []
        source.forEach(function(e) {
            promises.push(new Promise((resolve, reject) => {
                getData(e)
                .then((result) => {
                    result = _.get(result, 'items')
                    exportedData.push(result)
                    resolve()
                }).catch(reject)
            }))
        })
        Promise.all(promises)
        .then(() => {
            exportedData = _.flattenDeep(exportedData)
        }).then(() => {
            resolve(exportedData)
        }).catch(reject)
    })
}

module.exports = exportData().then((result) => { return result }).catch(console.error)
