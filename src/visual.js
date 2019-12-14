import P5 from 'p5'

export function exampleSketch() {
  // Sketch closure
  let sketch // passed to P5 instance
  let s // use this to reference sketch
  let isDrawing // state flag :O

  let onStart = () => { return void 0 }
  let onStop = () => { return void 0 }

  function init() {
    sketch = sk => {
      sk.setup = setup
      sk.draw = draw
      s = sk
    }
    //const p5 = new P5(sketch)
    const p5 = new P5(sketch)
  }

  function setup() {
    s.createCanvas(window.innerWidth, window.innerHeight)
    s.clear()
    s.fill(80)
    s.noStroke()
  }

  function draw() {
    if (s.mouseIsPressed) {
      s.circle(s.mouseX, s.mouseY, 28)
      if(!isDrawing) {
        isDrawing = true
        onStart()
      }
    } else if (isDrawing) {
      s.clear()
      isDrawing = false
      onStop()
    }
  }

  function setOnStart(func) {
    onStart = func
  }

  function setOnStop(func) {
    onStop = func
  }

  return {
    init, setOnStart, setOnStop
  }
}
