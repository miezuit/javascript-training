/*
let myPromise = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => resolve(myPromise()), 3000)
    })
}
*/

new Promise((resolve, reject) => setTimeout(() => resolve(), 1000))
.then(() => {
    let div = document.createElement('div')
    div.innerText = 'unu'
    document.querySelector('#app').appendChild(div)
    return new Promise((resolve, reject) => setTimeout(() => resolve(), 1000))
}).then(() => {
    let div = document.createElement('div')
    div.innerText = 'doi'
    document.querySelector('#app').appendChild(div)
})

/*
myPromise().then(() => {
    let div = document.createElement('div')
    div.innerText = 'unu'
    document.querySelector('#app').appendChild(div)
}).then(() => {
    let div = document.createElement('div')
    div.innerText = 'doi'
    document.querySelector('#app').appendChild(div)
}).then(() => {
    let div = document.createElement('div')
    div.innerText = 'trei'
    document.querySelector('#app').appendChild(div)
})
*/

function go() {
    showCircle(150, 150, 100).then(div => {
        div.classList.add('message')
        div.append("Hello, world!")
    })
}

function showCircle(cx, cy, radius) {
    let div = document.createElement('div')
    div.style.width = 0
    div.style.height = 0
    div.style.left = cx + 'px'
    div.style.top = cy + 'px'
    div.className = 'circle'
    document.body.append(div)

    return new Promise(resolve => {
        setTimeout(() => {
          div.style.width = radius * 2 + 'px';
          div.style.height = radius * 2 + 'px';
  
          div.addEventListener('transitionend', function handler() {
            div.removeEventListener('transitionend', handler);
            resolve(div);
          });
        }, 0);
      })
  }


// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject("failed"), 1000)
// })

// promise.then(
//     result => alert(result),
//     error => alert(error)
// )

/*
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  }).then(function(result) {
    alert(result);
    return result * 2;
  }).then(function(result) {
    alert(result);
    return result * 2;
  }).then(function(result) {
    alert(result);
    return result * 2;
  });
  */


