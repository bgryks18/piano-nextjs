import React, { useCallback, useEffect, useContext } from 'react'
import Key from './Key'
import Keys from '../utils/keys'
import PianoContext from '../context/PianoContext'
const PianoKeyboard = () => {
  const states = useContext(PianoContext)
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.repeat) {
        return
      }
      Object.keys(Keys).forEach((note) => {
        const keySource = states.refs.find((ref) => ref.note === note).keySource
        if (Keys[note] === e.key) {
          playNote(note, 'keyboard', keySource)
        } else if (Keys[note] === e.keyCode) {
          playNote(note, 'keyboard', keySource)
        }
      })
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  const playNote = useCallback((key, way, keySource) => {
    new Audio(keySource).play().then(() => {
      if (way === 'keyboard') {
        const keyElement = states.refs.find((ref) => ref.note === key).current
          .current
        if (keyElement.classList.contains('black')) {
          // zaman alacağı için 0px olmasına rağmen renk belirtiyoruz çünkü geçiş olacak
          keyElement.animate([{ borderBottom: '0px solid #141414' }], {
            duration: 100,
          })
        } else {
          keyElement.animate([{ backgroundColor: '#ececec' }], {
            duration: 100,
          })
        }
      }
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="keyboard">
      {Object.getOwnPropertyNames(Keys).map((item) => {
        return <Key note={item} playNote={playNote} key={item} />
      })}
    </div>
  )
}

export default PianoKeyboard
