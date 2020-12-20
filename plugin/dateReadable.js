const luxon = require('luxon')

module.exports = function(date) {
    let dt = luxon.DateTime.fromISO(date)
    return dt.setLocale('id-ID').toLocaleString(luxon.DateTime.DATE_FULL)
}