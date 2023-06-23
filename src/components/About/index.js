import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)

    return () => {
      clearTimeout(timerId)
    }
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
        <p>
          I'm an ambitious front-end developer looking for a challenging role
          that provides an opportunity to work with the latest technologies on
          diverse projects.
        </p>
        <p align="left">
          {" "}
          I'm a thinker with a natural curiousity that is driven to perpetually
          work through problems and solve them, one at a time.
        </p>
        <p>
          {" "}
          Outside of coding, I love to play soccer and golf, exercise, read,
          play the drums, and learn about new technology!
        </p>
      </div>
      <div class="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
