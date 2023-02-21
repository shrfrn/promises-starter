'use strict'

getUserDetails('vyaron')
    .then(user => console.log('Got user', user))
    .catch(err => alert(err))

// setTimeout(()=>{
//     getUserDetails('vyaron')
//     .then(user => console.log('Got user', user))
// }, 1250)


// Get user data from network or cache - return a promise
function getUserDetails(username) {
    const url = 'https://api.github.com/users/'

    return fetch(url + username)
        .then(res => res.json())
        .then(res => {
            if(res.message === 'Not Found') {
                throw new Error(res.message)
            } else {
                return res
            }
        })
        .catch(err => {
            console.log(err);
            throw new Error(err + username)
        })
}