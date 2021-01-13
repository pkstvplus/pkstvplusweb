const exportData = require('../../../plugin/other/fetchYoutubeData')

const src = [
    'UCejL25NjyNxlMR0JqlFX4Dg', // DPR RI
    'UC0emyqBTszX2Cd9z0G8bYPw', // MPR RI
]

const amount = 50

module.exports = exportData(src, amount).then((result) => {return result}).catch(console.error)