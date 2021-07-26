// new Promise((resolve, reject) => setTimeout(() => resolve(), 1000))
// .then(() => {
//     let div = document.createElement('div')
//     div.innerText = 'unu'
//     document.querySelector('#app').appendChild(div)
//     return new Promise((resolve, reject) => setTimeout(() => resolve(), 1000))
// }).then(() => {
//     let div = document.createElement('div')
//     div.innerText = 'doi'
//     document.querySelector('#app').appendChild(div)
// })

// promisify
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    await timeout(1000)
    let div = document.createElement('div')
    div.innerText = 'unu'
    document.querySelector('#app').appendChild(div)
    await timeout(1000)
    div = document.createElement('div')
    div.innerText = 'doi'
    document.querySelector('#app').appendChild(div)
}

run()