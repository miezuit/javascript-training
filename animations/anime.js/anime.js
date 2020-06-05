

anime({
    targets: document.querySelectorAll('div.square'),
    translateX: 400,
    duration: 3000,
    loop: true,
    direction: 'alternate',
    delay: anime.stagger(100)
})

anime({
    targets: 'path',
    duration: 1500,
    strokeDashoffset: [anime.setDashoffset, 0],
    delay: function(el, i) { return i * 250 },
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate'
})