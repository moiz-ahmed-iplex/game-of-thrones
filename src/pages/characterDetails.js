import React from "react"
import * as style from "./characterDetails.module.css"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
export default function Character(props) {
  const { data } = props
  return (
    <Layout>
      <div className={style.container}>
        <h1 className={style.heading}>
          {data.allCharacter.edges[0].node.name}
        </h1>
        <div className={style.wrapper}>
          <div className={style.contentWrapperAll}>
            <div className={style.content}>
              <h1>Gender:</h1>
              <p>
                {data.allCharacter.edges[0].node.gender
                  ? data.allCharacter.edges[0].node.gender
                  : "The gender of this charcter is unkown"}
              </p>
            </div>
            <div className={style.content}>
              <h1>culture:</h1>
              <p>
                {data.allCharacter.edges[0].node.culture
                  ? data.allCharacter.edges[0].node.culture
                  : "The culture that his character belongs to is unkown"}
              </p>
            </div>
            <div className={style.content}>
              <h1>born:</h1>
              <p>
                {data.allCharacter.edges[0].node.born
                  ? data.allCharacter.edges[0].node.born
                  : "The birth details of this character is unkown"}
              </p>
            </div>
            <div className={style.content}>
              <h1>died:</h1>
              <p>
                {data.allCharacter.edges[0].node.died
                  ? data.allCharacter.edges[0].node.died
                  : "The details of this character's deaths are unkown"}
              </p>
            </div>
            <div className={style.content}>
              <h1>Titles:</h1>
              {data.allCharacter?.edges[0].node.titles
                ? data.allCharacter?.edges[0].node.titles.map(title => (
                    <p>{title}</p>
                  ))
                : "No Titles are held by this character"}
            </div>
            <div className={style.content}>
              <h1>Aliases:</h1>
              {data.allCharacter?.edges[0]?.node?.aliases
                ? data.allCharacter?.edges[0]?.node?.aliases?.map(seat => (
                    <p>{seat}</p>
                  ))
                : "There are no aliases held by this character"}
            </div>
            <div className={style.content}>
              <h1>father:</h1>
              <p>
                {props.pageContext.father
                  ? props.pageContext.father
                  : "This characters father is unkown"}
              </p>
            </div>
            <div className={style.content}>
              <h1>mother:</h1>
              <p>
                {props.pageContext.mother
                  ? props.pageContext.mother
                  : "The mother of this character is unkown"}
              </p>
            </div>
            <div className={style.content}>
              <h1>spouse:</h1>
              <p>
                {" "}
                {props.pageContext.spouse
                  ? props.pageContext.spouse
                  : "This character has no spouses"}
              </p>
            </div>
            <div className={style.content}>
              <h1>books:</h1>
              {props.pageContext.books?.length > 0
                ? props.pageContext.books.map(book => <p>{book}</p>)
                : "This character has not appeared in any books"}
            </div>
            <div className={style.content}>
              <h1>Seasons of the TV series this character has been in:</h1>
              {props.pageContex?.tvSeries
                ? props.pageContex?.tvSeries?.map(tvSerie => <p>{tvSerie}</p>)
                : "This character has not appeared in the TV series"}
            </div>
            <div className={style.content}>
              <h1>playedBy:</h1>
              {props.pageContex?.playedBy
                ? props.pageContex?.playedBy?.map(actor => <p>{actor}</p>)
                : "This character has not appeared in the TV series"}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    allCharacter(filter: { id: { eq: $id } }) {
      edges {
        node {
          aliases
          allegiances
          books
          born
          died
          father
          gender
          mother
          name
          playedBy
          povBooks
          spouse
          titles
          tvSeries
        }
      }
    }
  }
`
