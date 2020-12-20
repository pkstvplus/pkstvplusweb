require('dotenv').config
const Cache = require('@11ty/eleventy-cache-assets')
const _ = require('lodash')

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const CHANNELS = [
    'UCaY27xawY-pUxFExWMH1VAg', // Mardani Ali Sera
    'UChbJsQxU40pql2gabKCy8wQ', // Ahmad Syaikhu (Asyik)
    'UCk0Q0aPwGn0fZDE_fpsedkQ', // Ledia Hanifa Amaliah
    'UCRuvdH1XhCW8u-V_A18X2cg', // Hidayat Nur Wahid
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