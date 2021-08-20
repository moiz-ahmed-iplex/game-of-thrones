import React from "react"
import * as style from "./index.module.css"
import { Link, navigate } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { graphql } from "gatsby"

export default function Home({ data }) {
  console.log("DATA", data)
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.background}>
          <div className={style.bottomContent}>
            <div className={style.logo} />
            <p>personal non commercial project</p>
          </div>
        </div>
      </div>
      {/*  */}
      <section>
        <div className={style.divider}></div>
        <p className={style.quote}>
          ""The man who passes the sentence should swing the sword"
        </p>
        <p className={style.charac}>-NED STARK</p>
      </section>
      {/*  */}

      <section>
        <div className={style.mainContainer}>
          <div className={style.bg}>
            <video width="100%" loop="true" autoplay="autoplay" muted>
              <source src="got-video.mp4" type="video/mp4" />
            </video>
            <div className={style.overlay}>
              <div className={style.logo} />
              <div className={style.buttonholder}>
                <AnchorLink to="/#houses" title="Our team">
                  <span>HOUSES</span>
                </AnchorLink>{" "}
                <Link to="/">Characters</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.desholder}>
        <h1>Plot :</h1>
        <p>
          Game of Thrones is roughly based on the storylines of the A Song of
          Ice and Fire book series by George R. R. Martin, set in the fictional
          Seven Kingdoms of Westeros and the continent of Essos. The series
          follows several simultaneous plot lines. The first story arc follows a
          war of succession among competing claimants for control of the Iron
          Throne of the Seven Kingdoms, with other noble families fighting for
          independence from the throne. The second concerns the exiled scion's
          actions to reclaim the throne; the third chronicles the threat of the
          impending winter, as well as the legendary creatures and fierce
          peoples of the North. Showrunner David Benioff jokingly suggested "The
          Sopranos in Middle-earth" as Game of Thrones' tagline, referring to
          its intrigue-filled plot and dark tone in a fantasy setting of magic
          and dragons.
        </p>
      </section>
      <section>
        <p className={style.quote}>
          When you play the game of thrones you win or you die
        </p>
        <p className={style.charac}>Cersie Lannister</p>
      </section>
      <section className={style.housesWrapper}>
        <div className={style.housesHolder} id="houses">
          <h1>houses</h1>
          <div className={style.houseSymbol}>
            <div className={style.sigil}>
              <img src="/house-arryn-got.svg" />
              Arryn
            </div>
            <div className={style.sigil}>
              <img src="/house-greyjoy-png.svg" />
              GreyJoy
            </div>{" "}
            <div className={style.sigil}>
              <img src="/house-lannister-got.svg" />
              Lannister
            </div>{" "}
            <div className={style.sigil}>
              <img src="/house-martell-got.svg" />
              martell
            </div>{" "}
            <div className={style.sigil}>
              <img src="/house-stark-got.svg" />
              stark
            </div>{" "}
            <div className={style.sigil}>
              <img src="/house-targerrian-got.svg" />
              targerrian
            </div>{" "}
            <div className={style.sigil}>
              {" "}
              <img src="/house-tully-got.svg" />
              tully
            </div>{" "}
            <div className={style.sigil}>
              {" "}
              <img src="/house-tyrell-got.svg" />
              tyrell
            </div>{" "}
            <div className={style.sigil}>
              {" "}
              <img src="/house-baratheon-got.svg" />
              baratheon
            </div>
          </div>
        </div>
      </section>
      <section className={style.worldwrapper}>
        <div className={style.worldhead}>
          <div className={style.logo} />
          <div className={style.worldcontent}>
            <p>Explore {"  "} the</p>
            <h1>world</h1>
            <Link to="/explore">Begin Exploring</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
