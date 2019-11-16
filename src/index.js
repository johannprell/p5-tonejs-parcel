import { init as initSketch } from './sketch'
import { init as initAudio } from './audio'

window.onload = init()

function init() {
  initSketch()
  initAudio()
}