import AnimatedLetters from "../AnimatedLetters"
import Loader from "react-loaders"
import "./index.scss"
import { useEffect, useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const refForm = useRef()

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)

    return () => {
      clearTimeout(timerId)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "gmail",
        "template_nmq6qvj",
        refForm.current,
        "RGLnZn_RKojT_3wXW"
      )
      .then(
        () => {
          alert("Message successfully sent!")
          window.location.reload(false)
        },
        () => {
          alert("Failed to send the message, please try again.")
        }
      )
  }

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
            <form ref={refForm} onSubmit={sendEmail}>
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
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Chris Winter,
          <br />
          Arizona,
          <br />
          United States
          <span>winterch32@outlook.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[33.448377, -112.074037]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[33.448377, -112.074037]}>
              <Popup>Winter lives here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
