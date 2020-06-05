document
     .querySelector('#c1')
     .addEventListener('drop', drop)

document
     .querySelector('#c2')
     .addEventListener('drop', drop)

document
     .querySelector('#c1')
     .addEventListener('dragover', preventDefault)

document
     .querySelector('#c2')
     .addEventListener('dragover', preventDefault)     

document
     .querySelector('.dragged')
     .addEventListener('dragstart', drag)

function preventDefault(event) {
    event.preventDefault()
}

function drag(event) {
    event.dataTransfer.setData('elementid', event.target.id)
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'all'
}

function drop(event) {
    const elementid = event.dataTransfer.getData('elementid')
    event.target.appendChild(document.getElementById(elementid))
}
