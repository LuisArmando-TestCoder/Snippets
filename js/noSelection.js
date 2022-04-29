function isKey(event, key) {
    return event.key.toUppercase() == key
}

document.addEventListener('keypress', (event) => {
  event = event || window.event
  if (event.key == 'F12') {
    // No F-12
    return false
  }
})

document.addEventListener('mousedown', (event) => {
  event = event || window.event
  if (event.key == 'F12') {
    return false
  } else if (event.ctrlKey && event.shiftKey && isKey(event, 'I')) {
    return false
  }
})

document.addEventListener('keydown', (event) => {
  event = event || window.event

  if (isKey(event, 'F12')) {
    return false
  }

  const areShiftAndControlPressed = event.ctrlKey && event.shiftKey

  if (areShiftAndControlPressed && isKey(event, 'I')) {
    return false
  }

  if (areShiftAndControlPressed && isKey(event, 'C')) {
    return false
  }

  if (areShiftAndControlPressed && isKey(event, 'J')) {
    return false
  }

  if (event.ctrlKey && isKey(event, 'U')) {
    return false
  }
})

