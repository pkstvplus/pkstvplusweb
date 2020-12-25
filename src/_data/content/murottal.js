const exportData = require('../../../plugin/other/fetchYoutubeData')

const src = [
    'UCos52azQNBgW63_9uDJoPDA', // Makkah Live
    'UCROKYPep-UuODNwyipe6JMw', // Madinah Live
]

const amount = 50

module.exports = exportData(src, amount).then((result) => {return result}).catch(console.error)