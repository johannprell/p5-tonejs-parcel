import * as TONE from 'tone'

let synth

export function init() {
  synth = new TONE.Synth().toMaster()
  synth.triggerAttackRelease('C4', '8n')
}