import React from "react"
import * as style from "./houseDetails.module.css"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
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
    <Layout>
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
              <p>
                {data.allHouse.edges[0].node.region
                  ? data.allHouse.edges[0].node.region
                  : "The region of this house is unkown"}
              </p>
            </div>
            <div className={style.content}>
              <h1>Coat of arms:</h1>
              <p>
                {data.allHouse.edges[0].node.coatOfArms
                  ? data.allHouse.edges[0].node.coatOfArms
                  : "The coat of arms of this house is unknown"}
              </p>
            </div>
            <div className={style.content}>
              <h1>Words Of The House:</h1>
              <p>
                {data.allHouse.edges[0].node.words
                  ? data.allHouse.edges[0].node.words
                  : "Words of this house are unkown"}
              </p>
            </div>
            <div className={style.content}>
              <h1>Titles held by the house:</h1>
              {data.allHouse?.edges[0].node.titles
                ? data.allHouse?.edges[0].node.titles.map(title => (
                    <p>{title}</p>
                  ))
                : "No Titles are held by this house"}
            </div>
            <div className={style.content}>
              <h1>Seats held by the House:</h1>
              {data.allHouse?.edges[0]?.node?.seats
                ? data.allHouse?.edges[0]?.node?.seats?.map(seat => (
                    <p>{seat}</p>
                  ))
                : "No seats are held by the house"}
            </div>
            <div className={style.content}>
              <h1>Current Lord:</h1>
              <p>
                {props.pageContext.currentLord
                  ? props.pageContext.currentLord
                  : "currently this house has no lord"}
              </p>
            </div>
            <div className={style.content}>
              <h1>Heir:</h1>
              <p>
                {props.pageContext.heir
                  ? props.pageContext.heir
                  : "This house has no heir"}
              </p>
            </div>
            <div className={style.content}>
              <h1>OverLord:</h1>
              <p>
                {props.pageContext.overlord
                  ? props.pageContext.overlord
                  : "This house has no overlord"}
              </p>
            </div>
            <div className={style.content}>
              <h1>Founded:</h1>
              <p>
                {data.allHouse.edges[0].node.founded
                  ? data.allHouse.edges[0].node.founded
                  : "The era in which this house was found is unkown"}
              </p>
            </div>
            <div className={style.content}>
              <h1>founder:</h1>
              <p>
                {props.pageContext.founder
                  ? props.pageContext.founder
                  : "FOunder of this house is unkown"}
              </p>
            </div>
            <div className={style.content}>
              <h1>Died Out In:</h1>
              <p>
                {data.allHouse.edges[0].node.diedOut
                  ? data.allHouse.edges[0].node.diedOut
                  : "This house has not died out"}
              </p>
            </div>
            <div className={style.content}>
              <h1>Ancestral weapons:</h1>
              {data.allHouse.edges[0].node.ancestralWeapons[0].length > 0
                ? data.allHouse.edges[0].node.ancestralWeapons.map(weapon => (
                    <p>{weapon}</p>
                  ))
                : "No ancestral weapons are held by the house"}
            </div>
            <div className={style.content}>
              <h1>Cadet Branches:</h1>
              {props.pageContext.cadetBranches.length > 0
                ? props.pageContext.cadetBranches.map(branch => <p>{branch}</p>)
                : "This house has no cadet branches"}
            </div>
            <div className={style.content}>
              <h1>Sworn Members:</h1>
              {props.pageContex?.swornMembers
                ? props.pageContex?.swornMembers?.map(member => <p>{member}</p>)
                : "No characters have sworn allegence to this house"}
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
    </Layout>
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
