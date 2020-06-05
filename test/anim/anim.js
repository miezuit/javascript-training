var elements = document.querySelectorAll('div');

anime({
  targets: elements,
  translateX: 270,
  delay: anime.stagger(50),
  loop: true,
  duration: 2000,
  direction: 'alternate'
});

anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 500 },
    direction: 'alternate',
    loop: true
})