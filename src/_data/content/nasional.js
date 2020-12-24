const exportData = require('../../../plugin/other/fetchYoutubeData')

const src = [
    'UCToDQGTa-S1hbnfXu47eULA', // PKSTV
    'UCIkLKSeWh7-tpPnVnoQlBfg', // PKSTV DPR-RI 
]

const amount = 50

module.exports = exportData(src, amount).then((result) => {return result}).catch(console.error)