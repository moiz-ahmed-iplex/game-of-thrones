import React from "react"
import * as style from "./explore.module.css"

export default function Explore() {
  return (
    <div>
      <div className={style.wrapper}>
        <section className={style.locationholder}>
          <div className={style.mapimg}></div>
          <div className={style.descholder}>
            <div className={style.img2}></div>
            <div className={style.textdiv}>
              <h2></h2>
              <h1></h1>
              <p></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
