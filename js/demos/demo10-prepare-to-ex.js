'use strict'

// Write a function isHot that takes a number as an argument 
// and returns a promise.
// The Promise should resolve to a boolean value: temparture >= 34 and 
// if the temparture is not between -100 and 100 reject with the error: 'Out of range'

isHot(34)
    .then(res => console.log('Is hot?', res))
    .catch(err => console.error(err))
    
isHot(340)
    .then(res => console.log('Is hot?', res))
    .catch(err => console.error(err))
