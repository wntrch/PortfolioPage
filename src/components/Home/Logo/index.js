import "./index.scss"
import LogoSnow from "../../../assets/images/logo.png"
import { useRef } from "react"
import { useEffect } from "react"
import gsap from "gsap-trial"
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin"

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      { opacity: 0 },
      { opacity: 1, delay: 4, duration: 4 }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        ref={solidLogoRef}
        className="solid-logo"
        src={LogoSnow}
        alt="snowflake"
      />
      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M10 1a1 1 0 00-1 1v3.267l-4.886-.642a1 1 0 00-.707 1.7l3.527 3.527-3.527 3.527a1 1 0 001.413 1.415L9 9.732v3.035l-1.293 1.293a1 1 0 001.414 1.415L10 14.414l1.293 1.293a1 1 0 001.414-1.415L11 12.767V9.732l3.886 3.886a1 1 0 001.414-1.415L11 8.732V5.267l3.886 3.886a1 1 0 00.707-1.7L11 5.267V2a1 1 0 00-1-1z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
