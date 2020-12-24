require('dotenv').config()
const Cache = require('@11ty/eleventy-cache-assets')
const _ = require('lodash')

const YOUTUBE_API_BASEURL = 'https://www.googleapis.com/youtube/v3'
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY

async function getPlaylistsIdFromChannel(channelId) {
    let url = YOUTUBE_API_BASEURL + `/channels?part=contentDetails&id=${channelId}&key=${YOUTUBE_API_KEY}`
    let data = await Cache(url, {
        duration: '30d',
        type: 'json'
    })
    return _.get(data, ['items', '0', 'contentDetails', 'relatedPlaylists', 'uploads'])
}

async function getVideosFromPlaylists(channelId, amount) {
    let playlistId = await getPlaylistsIdFromChannel(channelId)
    let url = YOUTUBE_API_BASEURL + `/playlistItems?part=snippet&maxResults=${process.env.ELEVENTY_ENV === 'prod' ? amount : 4}&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`
    let data = await Cache(url, {
        duration: '6h',
        type: 'json'
    }) 
    return _.get(data, 'items')
}

function exportVideoData(source, amount) {
    return new Promise((resolve, reject) => {
        let promises = []
        let data = []
        source.forEach(function(s) {
            promises.push(new Promise((resolve, reject) => {
                getVideosFromPlaylists(s, amount)
                .then((result) => {
                    data.push(result)
                    resolve()
                }).catch(reject)
            }))
        })
        Promise.all(promises)
        .then(() => {
            resolve(_.flattenDeep(data))
        }).catch(reject)
    })
}

module.exports = exportVideoData
