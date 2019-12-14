import * as TONE from 'tone'

export function exampleSynth() {
  let osc
  let isPlaying

  function init() {
    osc = new TONE.OmniOscillator(440, TONE.Oscillator.Type.Sine).toMaster()
    osc.volume.value = -10 // roll of some volume
  }

  function start() {
    if(!isPlaying) {
      osc.start()
      isPlaying = true
    }
  }

  function stop() {
    if(isPlaying) {
      osc.stop()
      isPlaying = false
    }
  }

  return {
    init, start, stop, isPlaying
  }
}
