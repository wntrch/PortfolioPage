import LogoTitle from "../../assets/images/logo.png"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./index.scss"
import Logo from "./Logo/index"
import AnimatedLetters from "../AnimatedLetters"
import Loader from "react-loaders"

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = [" ", "C", "h", "r", "i", "s"]
  const jobArray = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ]

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)

    return () => {
      clearTimeout(timerId)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <img src={LogoTitle} alt="developer" />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>All Things JavaScript & React</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
