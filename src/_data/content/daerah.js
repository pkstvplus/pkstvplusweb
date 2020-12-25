const exportData = require('../../../plugin/other/fetchYoutubeData')

const src = [
    'UCoRGdOssLxGG9FoK251fRmQ', // Jakarta
    'UCmr0tJWJQE98Y0IA6CA_r2Q', // Jabar
    'UC8dV_vnbGZulXKb67LVSnQQ', // Jateng
    'UCtoa6WUiC525dzMww-1woOw', // Jatim
    'UCtDL-L8ssHrojKMrQ77tmJQ', // Banten
    'UCdXOX4b7sD0mLSby1WerAWQ', // Bandung - Jabar
    'UC4ZznWNHGwPSNwPvZ_kh-dQ', // Lampung
    'UCRC7h-WNmKfEAym4gyT_UGQ', // Sumsel
    'UCYSQuVYAeHcysKWglv0b1TQ', // Bengkulu
    'UCGYIElREpmuZw7jMuZvXeGg', // Riau
    'UC8_pkEdf01CFdhnaGA75pGg', // Kepri
    'UCqaNpljy0wAiULjgSHSKuMw', // Kalbar
    'UCG764Oc9CPTxYGNxcozi0pg', // Kaltim
    'UCc05t3_b73ay70oJ7KijY1w', // Palangka-Kalteng
    'UCEy5udKpXeATNSDU-y5h24g', // Kapuas-Kalteng
    'UCLZTHtYfVcTMX9YqsyIDm_Q', // NTB
    'UCKyyaWzVG8f98nGxip2Dm9A', // Sulut
]

const amount = 50

module.exports = exportData(src, amount).then((result) => {return result}).catch(console.error)