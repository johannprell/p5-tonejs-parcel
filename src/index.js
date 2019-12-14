import { exampleSketch } from './visual'
import { exampleSynth } from './audio'

window.onload = init()

function init() {
  const synth = exampleSynth()
  synth.init()
  const sketch = exampleSketch()
  sketch.init()
  sketch.setOnStart(synth.start)
  sketch.setOnStop(synth.stop)
}
