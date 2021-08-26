import React from "react"
import * as style from "./SideMenu.module.css"
import { Link } from "gatsby"

export default function SideMenu() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Link to="/" className={style.navLink}>
          <div className={style.content}>
            <h1>Books</h1>
          </div>
        </Link>
        <Link to="/" className={style.navLink}>
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
