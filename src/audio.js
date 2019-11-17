import * as TONE from 'tone'

let osc

export function init() {
  osc = new TONE.OmniOscillator(440, TONE.Oscillator.Type.Sine).toMaster()
}

export function start() {
  osc.start()
}

export function play(x, y) {
  // TODO: use x and y to manipulate pitch and timbre
}

export function stop() {
  osc.stop()
}