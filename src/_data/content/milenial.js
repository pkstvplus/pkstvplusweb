const exportData = require('../../../plugin/other/fetchYoutubeData')

const src = [
    'UC9S2di9fvMzZKXbmTyVWUEQ', // PKS Muda
    'UC2wAcH8gHdUBP0cDOrPSfDA', // GK
]

const amount = 50

module.exports = exportData(src, amount).then((result) => {return result}).catch(console.error)