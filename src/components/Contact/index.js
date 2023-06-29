import AnimatedLetters from "../AnimatedLetters"
import Loader from "react-loaders"
import "./index.scss"
import { useEffect, useState } from "react"

const Contact = () => {
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
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", "", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am open to any junior developer and freelance oppurtunities. If
            you have any other questions or would like to reach me, please fill
            out the form below!
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-buttoon" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
