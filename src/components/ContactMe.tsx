<<<<<<< HEAD:src/components/ContactMe.tsx
import '../styling/ContactMe.css'
import '../effects/MouseEffects'
import MouseEffects from '../effects/MouseEffects'
=======
import '../com.syntex.sytling/ContactMe.css'
import '../com.syntex.functionality/MouseEffects'
import MouseEffects from '../com.syntex.functionality/MouseEffects'
import { SourceTextModule } from 'vm'
import { MouseEventHandler } from 'react'
>>>>>>> developer:src/com.syntex.components/ContactMe.tsx

/**
 * The contact section of the website
 * @returns the react component
 */
function ContactMe() {
  function onGitHubClick() {
    window.open('https://github.com/F12-Syntex')
  }

  function itemHover() {
    MouseEffects.setMouseHover(true)
  }

  function itemExit() {
    MouseEffects.setMouseHover(false)
  }

  return (
    <div className="contact-me">
      <h1 id="contact-label">Contact Me</h1>
      <h1 id="contact-label"> ⸻ </h1>
      <div className="contact-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="min(10vw, 30px)"
          height="min(5vh, 30px)"
          fill="gray"
          viewBox="0 0 16 16"
          onClick={onGitHubClick}
          onMouseEnter={itemHover}
          onMouseLeave={itemExit}
          className="contact-me-github"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </div>
    </div>
  )
}

export default ContactMe
