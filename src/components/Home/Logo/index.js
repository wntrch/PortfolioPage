import "./index.scss"
import LogoSnow from "../../../assets/images/logo.png"

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoSnow} alt="snowflake" />
    </div>
  )
}

export default Logo
