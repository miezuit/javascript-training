

anime({
    targets: document.querySelectorAll('div.square'),
    translateX: 400,
    duration: 3000,
    loop: true,
    direction: 'alternate',
    delay: anime.stagger(100)
})