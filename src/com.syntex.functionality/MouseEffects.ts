class MouseEffects {
  registerCustomCursor(document: Document) {
    // Get the element to apply mouse effects
    const element = document.getElementById('cursor')
    

    if (element == null) return

    //make sure the custom cursor updates to the mouse position
    document.addEventListener('mousemove', function (event) {
      var cursorCircle = document.getElementById('cursor')
      if (cursorCircle == null) return
      cursorCircle.style.left = event.clientX - 10 + 'px'
      cursorCircle.style.top = event.clientY - 10 + 'px'
    })

    // Add event listeners for different mouse events
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    function handleMouseMove() {
      if (element == null) return

      if (element.classList.contains('mousedown')) return

      element.classList.add('moving') // Apply 'moving' class when mouse moves
      element.classList.remove('mousedown', 'mouseup') // Remove other classes
    }

    function handleMouseDown() {
      if (element == null) return
      element.classList.add('mousedown') // Apply 'clicking' class when mouse button is pressed
      element.classList.remove('moving', 'mouseup') // Remove other classes
    }

    function handleMouseUp() {
      if (element == null) return
      element.classList.add('mouseup') // Apply 'pressed' class when mouse button is released
      element.classList.remove('moving', 'mousedown') // Remove other classes
    }
  }
}

export default MouseEffects
