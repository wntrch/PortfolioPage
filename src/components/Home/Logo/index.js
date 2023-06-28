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
            d="M 306.087 256 c 0 27.619 -22.468 50.087 -50.087 50.087 V 512 c 9.217 0 16.696 -7.479 16.696 -16.696 v -26.478 l 32.718 32.718 c 3.261 3.261 7.533 4.892 11.804 4.892 s 8.544 -1.631 11.804 -4.892 c 6.521 -6.521 6.521 -17.087 0 -23.609 l -56.326 -56.327 v -83.813 c 10.642 -2.168 20.536 -6.39 29.295 -12.197 l 59.303 59.303 v 79.663 c 0 9.217 7.479 16.696 16.696 16.696 c 9.217 0 16.696 -7.479 16.696 -16.696 v -46.271 l 18.728 18.728 c 3.261 3.261 7.533 4.892 11.804 4.892 s 8.544 -1.631 11.804 -4.892 c 6.521 -6.521 6.521 -17.087 0 -23.609 l -18.727 -18.727 h 46.271 c 9.217 0 16.696 -7.479 16.696 -16.696 c 0 -9.217 -7.479 -16.696 -16.696 -16.696 h -79.663 L 325.6 301.991 c 5.807 -8.759 10.027 -18.652 12.197 -29.295 h 83.813 l 56.326 56.326 c 3.261 3.261 7.533 4.892 11.804 4.892 s 8.544 -1.631 11.804 -4.892 c 6.521 -6.521 6.521 -17.087 0 -23.609 l -32.717 -32.717 h 26.478 c 9.217 0 16.696 -7.479 16.696 -16.696 s -7.479 -16.696 -16.696 -16.696 h -26.478 l 32.718 -32.718 c 6.521 -6.521 6.521 -17.087 0 -23.609 s -17.087 -6.521 -23.609 0 l -56.327 56.327 h -83.813 c -2.168 -10.642 -6.39 -20.536 -12.197 -29.295 l 59.303 -59.303 h 79.663 c 9.217 0 16.696 -7.479 16.696 -16.696 s -7.479 -16.696 -16.696 -16.696 h -46.271 l 18.728 -18.728 c 6.521 -6.521 6.521 -17.087 0 -23.609 s -17.087 -6.521 -23.609 0 l -18.727 18.728 V 47.435 c 0 -9.217 -7.479 -16.696 -16.696 -16.696 c -9.217 0 -16.696 7.479 -16.696 16.696 v 79.663 L 301.991 186.4 c -8.759 -5.807 -18.652 -10.027 -29.295 -12.197 V 90.391 l 56.326 -56.326 c 6.521 -6.521 6.521 -17.087 0 -23.609 s -17.087 -6.521 -23.609 0 l -32.717 32.717 V 16.696 C 272.696 7.479 265.217 0 256 0 v 205.913 C 283.619 205.913 306.087 228.381 306.087 256 Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
