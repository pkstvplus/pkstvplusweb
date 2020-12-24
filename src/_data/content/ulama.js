const exportData = require('../../../plugin/other/fetchYoutubeData')

const src = [
    'UCselK8dKN2wKx-v1ilJ80fQ', // Habib Salim - Majelis Selasa
    'UCFTcBc9kgxdEojIhLiBUZvw', // Cahyadi Takariawan
    'UCGnDTXkGhqiJpQ6cpKgtR6g', // Jazuli Juwaini
]

const amount = 50

module.exports = exportData(src, amount).then((result) => {return result}).catch(console.error)