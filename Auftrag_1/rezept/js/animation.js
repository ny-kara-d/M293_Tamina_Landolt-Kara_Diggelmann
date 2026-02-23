import { animate, stagger, splitText } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';

const { chars } = splitText('h1', {
  chars: { wrap: true },
});

animate(chars, {
  y: ['75%', '0%'],
  duration: 750,
  ease: 'out(3)',
  delay: stagger(50),
  loop: true,
  alternate: true,
});
