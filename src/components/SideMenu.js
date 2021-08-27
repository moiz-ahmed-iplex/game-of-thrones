import React from "react"
import * as style from "./SideMenu.module.css"
import { Link } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"

export default function SideMenu() {
  if (typeof window !== "undefined") {
    AOS.init()
  }
  return (
    <div
      className={style.container}
      data-aos="fade-right"
      data-aos-offset="500"
      data-aos-duration="500"
    >
      <div className={style.wrapper}>
        <Link to="/allBooks" className={style.navLink}>
          <div className={style.content}>
            <h1>Books</h1>
          </div>
        </Link>
        <Link to="/charactersMajor" className={style.navLink}>
          <div className={style.content}>
            <h1>Characters</h1>
          </div>
        </Link>
        <Link to="/allhouses" className={style.navLink}>
          <div className={style.content}>
            <h1>Houses</h1>
          </div>
        </Link>
        <Link to="/explore" className={style.navLink}>
          <div className={style.content}>
            <h1>Explore</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}
