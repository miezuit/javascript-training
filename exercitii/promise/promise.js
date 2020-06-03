
new Promise((resolve, reject) => {
    setTimeout(() => resolve("unu"), 3000)
}).then(result => { 
    addDiv(result)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("doi"), 2000)
    })
}).then(result => {
    addDiv(result)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("trei"), 1000)
    })
}).then(result => {
    addDiv(result)
})

function addDiv(text) {
    let div = document.createElement('div')
    div.innerText = text
    document.querySelector('body').appendChild(div)
}