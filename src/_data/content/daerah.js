const exportData = require('../../../plugin/other/fetchYoutubeData')

const src = [
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

const amount = 50

module.exports = exportData(src, amount).then((result) => {return result}).catch(console.error)