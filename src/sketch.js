import P5 from 'p5'

// Sketch closure
let s
let sketch

export function init() {
  s = (sk) => {
    sk.setup = setup
    sk.draw = draw
    sketch = sk
  }
  const p5 = new P5(s)
}

function setup() {
  sketch.createCanvas(window.innerWidth, window.innerHeight)
  console.log('alide')
}

function draw() {
  sketch.background(220)
}
