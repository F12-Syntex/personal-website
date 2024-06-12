import React, { useEffect } from 'react'
import '../styling/App.scss'
import '../styling/mouse.scss'
import MouseEffects from '../effects/MouseEffects'
import {
  DiReact,
  DiCodeigniter,
  DiBootstrap,
  DiGit,
  DiHtml5,
  DiJsBadge,
  DiJava,
  DiPhp,
  DiPython
} from 'react-icons/di'
// import $ from 'jquery'

/**
 * The main component of the website
 * @returns the website
 */
function Home() {
  useEffect(() => {
    const occupationText = document.getElementById('occupation')
    const cursor = document.getElementById('cursor-introduction')
    const newTextArray = ['Front-end Developer', 'Software engineer']
    let currentTextIndex = 0
    let currentCharIndex = 0
    let isDeleting = false

    /**
     * The function that types the text in the introduction page
     */
    function typeWriter() {
      if (occupationText === null || cursor === null) return

      const currentText = newTextArray[currentTextIndex]
      cursor.classList.remove('waiting')

      if (!isDeleting) {
        occupationText.textContent += currentText.charAt(currentCharIndex)
        currentCharIndex++
        if (currentCharIndex === currentText.length) {
          isDeleting = true
          setTimeout(typeWriter, 2000) // delay before deleting
          cursor.classList.add('waiting')
        } else {
          setTimeout(typeWriter, 100) // typing speed
        }
      } else {
        occupationText.textContent = currentText.slice(0, currentCharIndex - 1)
        currentCharIndex--
        if (currentCharIndex === 0) {
          isDeleting = false
          currentTextIndex++
          if (currentTextIndex === newTextArray.length) {
            currentTextIndex = 0
          }
          cursor.style.display = 'inline' // showing cursor while re-typing
          setTimeout(typeWriter, 500) // delay before re-typing new text
          cursor.classList.add('waiting')
        } else {
          setTimeout(typeWriter, 50) // deleting speed
        }
      }
    }

    typeWriter()
  }, [])

  useEffect(() => {
    MouseEffects.registerCustomCursor(document)
  }, [])

  return (
    <div className="website" id="personal-website">
      <div id="cursor" />
      <div className="website-content">
        <div className="website-navbar">
          <div className="navbar-links">
            <a href="#personal-website" id='navbar-item'>Home</a>
            <a href="#about-me" id='navbar-item'>About</a>
            <a href="#projects" id='navbar-item'>Projects</a>
            <a href="#contact" id='navbar-item'>Contact</a>
          </div>
        </div>
        <div className="introduction-page">
          <div className="introduction-label">
            <a>Hi,</a>
            <a>I'm Saif</a>
            <div className="changeAnimation">
              <a id="occupation" />
              <span id="cursor-introduction" />
            </div>
            <div className="tech-stack">
              <div className="icon-list">
                <DiReact className="react-icon" />
                <DiCodeigniter className="ci-icon" />
                <DiBootstrap className="bs-icon" />
                <DiGit className="git-icon" />
                <DiHtml5 className="html-icon" />
                <DiJsBadge className="js-icon" />
                <DiJava className="java-icon" />
                <DiPhp className="php-icon" />
                <DiPython className="py-icon" />
              </div>
            </div>
          </div>
          <div className="home-image"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
