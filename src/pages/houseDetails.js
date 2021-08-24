import React from "react"
import * as style from "./houseDetails.module.css"
import { graphql } from "gatsby"

export default function House(props) {
  console.log(`props`, props)
  const { data } = props
  console.log("data", data)
  const tryRequire = path => {
    try {
      return require(`../../static/${path}.svg`)
    } catch (err) {
      return null
    }
  }
  return (
    <div className={style.container}>
      <h1 className={style.heading}>{data.allHouse.edges[0].node.name}</h1>
      <div className={style.wrapper}>
        <div
          className={
            tryRequire(data.allHouse.edges[0].node.name)
              ? style.contentWrapper
              : style.contentWrapperAll
          }
        >
          <div className={style.content}>
            <h1>Region:</h1>
            <p>{data.allHouse.edges[0].node.region}</p>
          </div>
          <div className={style.content}>
            <h1>Coat of arms:</h1>
            <p>{data.allHouse.edges[0].node.coatOfArms}</p>
          </div>
          <div className={style.content}>
            <h1>Words Of The House:</h1>
            <p>{data.allHouse.edges[0].node.words}</p>
          </div>
          <div className={style.content}>
            <h1>Titles held by the house:</h1>
            {data.allHouse?.edges[0].node.titles?.map(title => (
              <p>{title}</p>
            ))}
          </div>
          <div className={style.content}>
            <h1>Seats held by the House:</h1>
            {data.allHouse?.edges[0]?.node?.seats?.map(seat => (
              <p>{seat}</p>
            ))}
          </div>
          <div className={style.content}>
            <h1>Current Lord:</h1>
            <p>{props.pageContext.currentLord}</p>
          </div>
          <div className={style.content}>
            <h1>Heir:</h1>
            <p>{props.pageContext.heir}</p>
          </div>
          <div className={style.content}>
            <h1>OverLord:</h1>
            <p>{props.pageContext.overlord}</p>
          </div>
          <div className={style.content}>
            <h1>Founded:</h1>
            <p>{data.allHouse.edges[0].node.founded}</p>
          </div>
          <div className={style.content}>
            <h1>founder:</h1>
            <p>{props.pageContext.founder}</p>
          </div>
          <div className={style.content}>
            <h1>Died Out In:</h1>
            <p>{data.allHouse.edges[0].node.diedOut}</p>
          </div>
          <div className={style.content}>
            <h1>Ancestral weapons:</h1>
            {data.allHouse?.edges[0]?.node?.ancestralWeapons?.map(weapon => (
              <p>{weapon}</p>
            ))}
          </div>
          <div className={style.content}>
            <h1>Cadet Branches:</h1>
            {props.pageContext?.cadetBranches?.map(branch => (
              <p>{branch}</p>
            ))}
          </div>
          <div className={style.content}>
            <h1>Sworn Members:</h1>
            {props.pageContex?.swornMembers?.map(member => (
              <p>{member}</p>
            ))}
          </div>
        </div>
        {tryRequire(data.allHouse.edges[0].node.name) ? (
          <img
            src={`/${data.allHouse.edges[0].node.name}.svg`}
            className={style.image}
            alt=""
          />
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    allHouse(filter: { id: { eq: $id } }) {
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
