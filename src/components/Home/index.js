import LogoTitle from "../../assets/images/logo.png"
import { Link } from "react-router-dom"
import "./index.scss"

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm Chris
          <img src={LogoTitle} alt="developer" />
          <br />
          Web Developer
        </h1>
        <h2>Front End Developer / JavaScript Enthusiast</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
