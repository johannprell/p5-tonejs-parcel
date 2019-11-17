import P5 from 'p5'
import * as AUDIO from './audio' 

// Sketch closure
let sketch // passed to P5 instance
let s // use this to reference sketch

let isActive = false

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
  resetCanvas()
  s.fill(255)
}

function draw() {
  if (s.mouseIsPressed) {
    if(!isActive) {
      beginDrawing()
    }
    updateDrawing()
  } else {
    if(isActive) {
      reset()
    }
  }
}

function beginDrawing() {
  isActive = true
  AUDIO.start()
}

function updateDrawing() {
  const x = s.mouseX
  const y = s.mouseY
  s.ellipse(x, y, 80, 80)
  AUDIO.play(x, y)
}

function reset() {
  isActive = false
  resetCanvas()
  AUDIO.stop()
}

function resetCanvas() {
  s.clear()
  s.background(220)
}
