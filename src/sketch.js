import P5 from 'p5'

// Sketch closure
let sketch // passed to P5 instance
let s // use this to reference sketch

export function init() {
  sketch = (sk) => {
    sk.setup = setup
    sk.draw = draw
    s = sk
  }
  const p5 = new P5(sketch)
}

function setup() {
  s.createCanvas(window.innerWidth, window.innerHeight)
  s.background(220)
  s.fill(255)
}

function draw() {
  if (s.mouseIsPressed) {
    s.ellipse(s.mouseX, s.mouseY, 80, 80)
  }
}
