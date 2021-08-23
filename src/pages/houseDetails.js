import React from "react"
import * as style from "./houseDetails.module.css"
import { graphql } from "gatsby"

export default function House(props) {
  console.log(`props`, props)
  const { data } = props
  console.log("data", data)
  return (
    <div className={style.container}>
      <h1 className={style.heading}>{data.allHouses.edges[0].node.name}</h1>
      <div className={style.wrapper}>
        <div className={style.contentWrapper}>
          <div className={style.content}>
            <h1>Region:</h1>
            <p>{data.allHouses.edges[0].node.region}</p>
          </div>
          <div className={style.content}>
            <h1>Coat of arms:</h1>
            <p>{data.allHouses.edges[0].node.coatOfArms}</p>
          </div>
          <div className={style.content}>
            <h1>Words Of The House:</h1>
            <p>{data.allHouses.edges[0].node.words}</p>
          </div>
          <div className={style.content}>
            <h1>Titles held by the house:</h1>
            <p>{data.allHouses.edges[0].node.titles}</p>
          </div>
          <div className={style.content}>
            <h1>Seats held by the House:</h1>
            <p>{data.allHouses.edges[0].node.seats}</p>
          </div>
          <div className={style.content}>
            <h1>Current Lord:</h1>
            <p>{data.allHouses.edges[0].node.currentLord}</p>
          </div>
          <div className={style.content}>
            <h1>Heir:</h1>
            <p>{data.allHouses.edges[0].node.heir}</p>
          </div>
          <div className={style.content}>
            <h1>OverLord:</h1>
            <p>{props.pageContext.overlord}</p>
          </div>
          <div className={style.content}>
            <h1>Founded:</h1>
            <p>{data.allHouses.edges[0].node.founded}</p>
          </div>
          <div className={style.content}>
            <h1>founder:</h1>
            <p>{data.allHouses.edges[0].node.founder}</p>
          </div>
          <div className={style.content}>
            <h1>Died Out In:</h1>
            <p>{data.allHouses.edges[0].node.diedOut}</p>
          </div>
          <div className={style.content}>
            <h1>Ancestral weapons:</h1>
            <p>{data.allHouses.edges[0].node.ancestralWeapons}</p>
          </div>
          <div className={style.content}>
            <h1>Cadet Branches:</h1>
            <p>{data.allHouses.edges[0].node.cadetBranches}</p>
          </div>
          <div className={style.content}>
            <h1>Sworn Members:</h1>
            <p>{data.allHouses.edges[0].node.swornMembers}</p>
          </div>
        </div>
        <img
          src={`/${data.allHouses.edges[0].node.name}.svg`}
          className={style.image}
        />
      </div>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    allHouses(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          name
          overlord
          region
          seats
          swornMembers
          titles
          words
          heir
          founder
          founded
          diedOut
          coatOfArms
          currentLord
          cadetBranches
          ancestralWeapons
        }
      }
    }
  }
`
