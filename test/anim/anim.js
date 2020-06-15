var elements = document.querySelectorAll('div');

anime({
  targets: elements,
  translateX: 270,
  delay: anime.stagger(50),
  loop: true,
  duration: 2000,
  direction: 'alternate'
});
