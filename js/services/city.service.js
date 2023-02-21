'use strict'

const STORAGE_KEY_CITIES = 'citiesDB'
const url = 'http://www.filltext.com/?rows=10&name={city}&population={numberRange|1000,7000}'

function getCities() {
    // Open APIs will sometimes block you if too many requests are being sent
    // Don't worry - we can use simple caching mechanism:
}