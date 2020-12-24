const exportData = require('../../../plugin/other/fetchYoutubeData')

const src = [
    'UCaY27xawY-pUxFExWMH1VAg', // Mardani Ali Sera
    'UChbJsQxU40pql2gabKCy8wQ', // Ahmad Syaikhu (Asyik)
    'UCk0Q0aPwGn0fZDE_fpsedkQ', // Ledia Hanifa Amaliah
    'UCRuvdH1XhCW8u-V_A18X2cg', // Hidayat Nur Wahid
]

const amount = 50

module.exports = exportData(src, amount).then((result) => {return result}).catch(console.error)