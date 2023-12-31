/**
 * This class is responsible for handling mouse effects
 * @class MouseEffects
 * @export MouseEffects
 */
class MouseEffects {
  public static setMouseHover(state: boolean) {
    const element = document.getElementById('cursor')
    if (element === null) return

    if (state) {
      element.classList.remove('mouseup', 'moving', 'mousedown') // Remove other classes
      element.classList.add('hover') // Apply 'hover' class when mouse is hovering
    } else {
      element.classList.remove('mouseup', 'moving', 'mousedown', 'hover') // Remove other classes
      element.classList.add('moving') // Apply 'hover' class when mouse is hovering
    }
  }

  public static registerCustomCursor(document: Document) {
    // Get the element to apply mouse effects
    const element = document.getElementById('cursor')

    if (element === null) return

    //make sure the custom cursor updates to the mouse position
    document.addEventListener('mousemove', function (event) {
      var cursorCircle = document.getElementById('cursor')
      if (cursorCircle === null) return
      cursorCircle.style.left = event.clientX - 10 + 'px'
      cursorCircle.style.top = event.clientY - 10 + 'px'
    })

    // Add event listeners for different mouse events
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    /**
     * this function is responsible for handling mouse move event
     */
    function handleMouseMove() {
      if (element === null || element.classList.contains('hover')) return

      if (element.classList.contains('mousedown')) return

      element.classList.add('moving') // Apply 'moving' class when mouse moves
      element.classList.remove('mousedown', 'mouseup') // Remove other classes
    }

    /**
     * this function is responsible for handling mouse down event
     */
    function handleMouseDown() {
      if (element === null || element.classList.contains('hover')) return
      element.classList.add('mousedown') // Apply 'clicking' class when mouse button is pressed
      element.classList.remove('moving', 'mouseup') // Remove other classes
    }

    /**
     * this function is responsible for handling mouse up event
     */
    function handleMouseUp() {
      if (element === null || element.classList.contains('hover')) return
      element.classList.add('mouseup') // Apply 'pressed' class when mouse button is released
      element.classList.remove('moving', 'mousedown') // Remove other classes
    }
  }
}

export default MouseEffects
