'use strict'

// TODO: Code a delay(t) function that gives a Promise API to setTimeout

delay(-2500)
    .then((x) => {
        console.log('After Delay', x)
    })
    .catch((err) => {
        console.log('Error', err)
    })