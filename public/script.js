const keys = document.querySelectorAll('.key')

window.addEventListener('keydown', (e) => {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (key === null) {
    return
  } else {
    playSound(sound)
    key.classList.add('playing')
  }
})

keys.forEach((key) => {
  key.addEventListener('transitionend', function () {
    key.classList.remove('playing')
  })
})

function playSound (sound) {
  sound.play()
  sound.currentTime = 0
}

