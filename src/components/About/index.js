import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons"

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
          My path into tech is not a conventional one. Previously a medical
          student, I decided to take a leave of absence and learn coding. I
          quickly realized that software development is my true passion.
        </p>
        <p align="left">
          {" "}
          Now, as a recent full stack coding bootcamp and ambitious front-end
          developer, I'm looking looking for a challenging role that provides an
          opportunity to work with the latest technologies on diverse projects.
          I'm a thinker with a natural curiousity that is driven to perpetually
          work through problems and solve them, one at a time.
        </p>
        <p>
          {" "}
          Outside of coding, I love to play soccer and golf, exercise, read,
          play the drums, and learn about new technology!
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
