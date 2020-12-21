require('dotenv').config()
const Cache = require('@11ty/eleventy-cache-assets')
const _ = require('lodash')

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const CHANNELS = [
    'UCoRGdOssLxGG9FoK251fRmQ', // Jakarta
    'UCmr0tJWJQE98Y0IA6CA_r2Q', // Jabar
    'UC8dV_vnbGZulXKb67LVSnQQ', // Jateng
    'UCtoa6WUiC525dzMww-1woOw', // Jatim
    'UCdXOX4b7sD0mLSby1WerAWQ', // Bandung
    'UCqaNpljy0wAiULjgSHSKuMw', // Kalbar
    'UCG764Oc9CPTxYGNxcozi0pg', // Kaltim
    'UCc05t3_b73ay70oJ7KijY1w', // Palangka-Kalteng
    'UCEy5udKpXeATNSDU-y5h24g', // Kapuas-Kalteng
    'UCLZTHtYfVcTMX9YqsyIDm_Q', // NTB
]

async function getData(id) {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&maxResults=50&order=date&type=video&videoSyndicated=true&videoEmbeddable=true&key=${YOUTUBE_API_KEY}`
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