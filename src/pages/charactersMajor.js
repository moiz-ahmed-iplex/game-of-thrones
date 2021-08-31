import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import * as style from "./charactersMajor.module.css"
const CharacterMajor = ({ data }) => {
  console.log("Data", data)
  return (
    <Layout>
      <div className={style.container}>
        <h1>Characters Of the Great Houses</h1>
        <Link to="/allCharcters" className={style.allCharacters}>
          {" "}
          Click here to view all the Characters of the series
        </Link>
        <div className={style.wrapper}>
          <h1>House Stark of winterfell</h1>
          <div className={style.card}>
            {data.stark.edges.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
        </div>
        <div className={style.wrapper}>
          <h1>House Lannister of Casterly Rock</h1>
          <div className={style.card}>
            {data.lannister.edges.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
        </div>
        <div className={style.wrapper}>
          <h1>House Targaryen of King's Landing</h1>
          <div className={style.card}>
            {data.targaryen.edges.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
        </div>
        <div className={style.wrapper}>
          <h1>House Greyjoy of Pyke</h1>
          <div className={style.card}>
            {data.greyjoy.edges.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
        </div>{" "}
        <div className={style.wrapper}>
          <h1>House Tyrell of Highgarden</h1>
          <div className={style.card}>
            {data.tyrell.edges.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
        </div>{" "}
        <div className={style.wrapper}>
          <h1>House Baratheon of Storm's End</h1>
          <div className={style.card}>
            {data.baratheon.edges.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
        </div>
        <div className={style.wrapper}>
          <h1>House Nymeros Martell of Sunspear</h1>
          <div className={style.card}>
            {data.nymerios.edges.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
        </div>{" "}
        <div className={style.wrapper}>
          <h1>House Tully of Riverrun</h1>
          <div className={style.card}>
            {data.tully.edges.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
        </div>
        <div className={style.wrapper}>
          <h1>House Arryn of the Eyrie</h1>
          <div className={style.card}>
            {data.arryn.edges.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CharacterMajor

export const query = graphql`
  {
    stark: allCharacter(
      filter: {
        name: { ne: "" }
        allegiances: { in: "https://www.anapioficeandfire.com/api/houses/362" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          id
        }
      }
    }
    arryn: allCharacter(
      filter: {
        name: { ne: "" }
        allegiances: { in: "https://www.anapioficeandfire.com/api/houses/7" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          id
        }
      }
    }
    baratheon: allCharacter(
      filter: {
        name: { ne: "" }
        allegiances: {
          in: [
            "https://www.anapioficeandfire.com/api/houses/16"
            "https://www.anapioficeandfire.com/api/houses/17"
          ]
        }
      }
    ) {
      totalCount
      edges {
        node {
          name
          id
        }
      }
    }
    lannister: allCharacter(
      filter: {
        name: { ne: "" }
        allegiances: { in: "https://www.anapioficeandfire.com/api/houses/229" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          id
        }
      }
    }
    targaryen: allCharacter(
      filter: {
        name: { ne: "" }
        allegiances: { in: "https://www.anapioficeandfire.com/api/houses/378" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          id
        }
      }
    }
    greyjoy: allCharacter(
      filter: {
        name: { ne: "" }
        allegiances: { in: "https://www.anapioficeandfire.com/api/houses/169" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          id
        }
      }
    }
    tyrell: allCharacter(
      filter: {
        name: { ne: "" }
        allegiances: { in: "https://www.anapioficeandfire.com/api/houses/398" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          id
        }
      }
    }
    tully: allCharacter(
      filter: {
        name: { ne: "" }
        allegiances: { in: "https://www.anapioficeandfire.com/api/houses/395" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          id
        }
      }
    }
    nymerios: allCharacter(
      filter: {
        name: { ne: "" }
        allegiances: { in: "https://www.anapioficeandfire.com/api/houses/285" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          id
        }
      }
    }
  }
`
