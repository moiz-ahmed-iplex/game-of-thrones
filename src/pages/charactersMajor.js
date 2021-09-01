import React, { useState } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import * as style from "./charactersMajor.module.css"
const CharacterMajor = ({ data }) => {
  console.log("Data", data)
  const [show, setShow] = useState(false)
  const [starkArr, setStarkArr] = useState(data.stark.edges.slice(0, 10))
  const [lannisterArr, setLannisterArr] = useState(
    data.lannister.edges.slice(0, 10)
  )
  const [targaryenArr, setTargaryenArr] = useState(
    data.targaryen.edges.slice(0, 10)
  )
  const [greyjoyArr, setGreyjoyArr] = useState(data.greyjoy.edges.slice(0, 10))
  const [tyrellArr, setTyrellArr] = useState(data.tyrell.edges.slice(0, 10))
  const [baratheonArr, setBaratheonArr] = useState(
    data.baratheon.edges.slice(0, 10)
  )
  const [nymeriosArr, setNymeriousArr] = useState(
    data.nymerios.edges.slice(0, 10)
  )
  const [tullyArr, setTullyArr] = useState(data.tully.edges.slice(0, 10))
  const [arrynArr, setArrynArr] = useState(data.arryn.edges.slice(0, 10))

  const handleShowMoreStark = () => {
    if (starkArr.length + 20 < data.stark.edges.length) {
      setStarkArr(data.stark.edges.slice(0, starkArr.length + 20))
    } else {
      setStarkArr(data.stark.edges)
      setShow(true)
    }
  }
  const handleShowLessStark = () => {
    setStarkArr(data.stark.edges.slice(0, 10))
    setShow(false)
    document.getElementById("stark").scrollIntoView({
      behavior: "smooth",
    })
    window.scrollTo(-90, 0)
  }
  const handleClickStark = () => {
    if (show === false) {
      handleShowMoreStark()
    } else {
      handleShowLessStark()
    }
  }
  const handleShowMoreLannister = () => {
    if (lannisterArr.length + 20 < data.lannister.edges.length) {
      setLannisterArr(data.lannister.edges.slice(0, lannisterArr.length + 20))
    } else {
      setLannisterArr(data.lannister.edges)
      setShow(true)
    }
  }
  const handleShowLessLannister = () => {
    setLannisterArr(data.lannister.edges.slice(0, 10))
    setShow(false)
    document.getElementById("lannister").scrollIntoView({
      behavior: "smooth",
    })
  }
  const handleClickLannister = () => {
    if (show === false) {
      handleShowMoreLannister()
    } else {
      handleShowLessLannister()
    }
  }
  const handleShowMoreGreyjoy = () => {
    if (greyjoyArr.length + 20 < data.greyjoy.edges.length) {
      setGreyjoyArr(data.greyjoy.edges.slice(0, greyjoyArr.length + 20))
    } else {
      setGreyjoyArr(data.greyjoy.edges)
      setShow(true)
    }
  }
  const handleShowLessGreyjoy = () => {
    setGreyjoyArr(data.greyjoy.edges.slice(0, 10))
    setShow(false)
    document.getElementById("greyjoy").scrollIntoView({
      behavior: "smooth",
    })
  }
  const handleClickGreyjoy = () => {
    if (show === false) {
      handleShowMoreGreyjoy()
    } else {
      handleShowLessGreyjoy()
    }
  }
  const handleShowMoreTargaryen = () => {
    if (targaryenArr.length + 20 < data.targaryen.edges.length) {
      setTargaryenArr(data.targaryen.edges.slice(0, targaryenArr.length + 20))
    } else {
      setTargaryenArr(data.targaryen.edges)
      setShow(true)
    }
  }
  const handleShowLessTargaryen = () => {
    setTargaryenArr(data.targaryen.edges.slice(0, 10))
    setShow(false)
    document.getElementById("targaryen").scrollIntoView({
      behavior: "smooth",
    })
  }
  const handleClickTargaryen = () => {
    if (show === false) {
      handleShowMoreTargaryen()
    } else {
      handleShowLessTargaryen()
    }
  }
  const handleShowMoreTyrell = () => {
    if (tyrellArr.length + 20 < data.tyrell.edges.length) {
      setTyrellArr(data.tyrell.edges.slice(0, tyrellArr.length + 20))
    } else {
      setTyrellArr(data.tyrell.edges)
      setShow(true)
    }
  }
  const handleShowLessTyrell = () => {
    setTyrellArr(data.tyrell.edges.slice(0, 10))
    setShow(false)
    document.getElementById("tyrell").scrollIntoView({
      behavior: "smooth",
    })
  }
  const handleClickTyrell = () => {
    if (show === false) {
      handleShowMoreTyrell()
    } else {
      handleShowLessTyrell()
    }
  }
  const handleShowMoreBaratheon = () => {
    if (baratheonArr.length + 10 < data.baratheon.edges.length) {
      setBaratheonArr(data.baratheon.edges.slice(0, baratheonArr.length + 10))
    } else {
      setBaratheonArr(data.baratheon.edges)
      setShow(true)
    }
  }
  const handleShowLessBaratheon = () => {
    setBaratheonArr(data.baratheon.edges.slice(0, 10))
    setShow(false)
    document.getElementById("baratheon").scrollIntoView({
      behavior: "smooth",
    })
  }
  const handleClickBaratheon = () => {
    if (show === false) {
      handleShowMoreBaratheon()
    } else {
      handleShowLessBaratheon()
    }
  }
  const handleShowMoreNymerious = () => {
    if (nymeriosArr.length + 10 < data.nymerios.edges.length) {
      setNymeriousArr(data.nymerios.edges.slice(0, nymeriosArr.length + 10))
    } else {
      setNymeriousArr(data.nymerios.edges)
      setShow(true)
    }
  }
  const handleShowLessNymerious = () => {
    setNymeriousArr(data.nymerios.edges.slice(0, 10))
    setShow(false)
    document.getElementById("nymerious").scrollIntoView({
      behavior: "smooth",
    })
  }
  const handleClickNymerious = () => {
    if (show === false) {
      handleShowMoreNymerious()
    } else {
      handleShowLessNymerious()
    }
  }
  const handleShowMoreTully = () => {
    if (tullyArr.length + 10 < data.tully.edges.length) {
      setTullyArr(data.tully.edges.slice(0, tullyArr.length + 10))
    } else {
      setTullyArr(data.tully.edges)
      setShow(true)
    }
  }
  const handleShowLessTully = () => {
    setTullyArr(data.tully.edges.slice(0, 10))
    setShow(false)
    document.getElementById("tully").scrollIntoView({
      behavior: "smooth",
    })
  }
  const handleClickTully = () => {
    if (show === false) {
      handleShowMoreTully()
    } else {
      handleShowLessTully()
    }
  }
  const handleShowMoreArryn = () => {
    if (arrynArr.length + 10 < data.arryn.edges.length) {
      setArrynArr(data.arryn.edges.slice(0, arrynArr.length + 10))
    } else {
      setArrynArr(data.arryn.edges)
      setShow(true)
    }
  }
  const handleShowLessArryn = () => {
    setArrynArr(data.arryn.edges.slice(0, 10))
    setShow(false)
    document.getElementById("arryn").scrollIntoView({
      behavior: "smooth",
    })
  }
  const handleClickArryn = () => {
    if (show === false) {
      handleShowMoreArryn()
    } else {
      handleShowLessArryn()
    }
  }
  return (
    <Layout>
      <div className={style.container}>
        <h1>Characters Of the Great Houses</h1>
        <Link to="/allCharcters" className={style.allCharacters}>
          {" "}
          Click here to view all the Characters of the series
        </Link>
        <div id="stark" className={style.wrapper}>
          <h1>House Stark of winterfell</h1>
          <div className={style.card}>
            {starkArr.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
          <button onClick={handleClickStark} className={style.showBtn}>
            {show ? "Show Less" : " Show More"}
          </button>
        </div>
        <div id="lannister" className={style.wrapper}>
          <h1>House Lannister of Casterly Rock</h1>
          <div className={style.card}>
            {lannisterArr.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
          <button onClick={handleClickLannister} className={style.showBtn}>
            {show ? "Show Less" : " Show More"}
          </button>
        </div>
        <div id="targaryen" className={style.wrapper}>
          <h1>House Targaryen of King's Landing</h1>
          <div className={style.card}>
            {targaryenArr.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
          <button onClick={handleClickTargaryen} className={style.showBtn}>
            {show ? "Show Less" : " Show More"}
          </button>
        </div>
        <div id="greyjoy" className={style.wrapper}>
          <h1>House Greyjoy of Pyke</h1>
          <div className={style.card}>
            {greyjoyArr.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
          <button onClick={handleClickGreyjoy} className={style.showBtn}>
            {show ? "Show Less" : " Show More"}
          </button>
        </div>{" "}
        <div id="tyrell" className={style.wrapper}>
          <h1>House Tyrell of Highgarden</h1>
          <div className={style.card}>
            {tyrellArr.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
          <button onClick={handleClickTyrell} className={style.showBtn}>
            {show ? "Show Less" : " Show More"}
          </button>
        </div>{" "}
        <div id="baratheon" className={style.wrapper}>
          <h1>House Baratheon of Storm's End</h1>
          <div className={style.card}>
            {baratheonArr.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
          <button onClick={handleClickBaratheon} className={style.showBtn}>
            {show ? "Show Less" : " Show More"}
          </button>
        </div>
        <div id="nymerious" className={style.wrapper}>
          <h1>House Nymeros Martell of Sunspear</h1>
          <div className={style.card}>
            {nymeriosArr.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
          <button onClick={handleClickNymerious} className={style.showBtn}>
            {show ? "Show Less" : " Show More"}
          </button>
        </div>{" "}
        <div id="tully" className={style.wrapper}>
          <h1>House Tully of Riverrun</h1>
          <div className={style.card}>
            {tullyArr.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
          <button onClick={handleClickTully} className={style.showBtn}>
            {show ? "Show Less" : " Show More"}
          </button>
        </div>
        <div id="arryn" className={style.wrapper}>
          <h1>House Arryn of the Eyrie</h1>
          <div className={style.card}>
            {arrynArr.map(character => (
              <Link to={"/characterDetails/" + character.node.name}>
                {character.node.name}
              </Link>
            ))}{" "}
          </div>
          <button onClick={handleClickArryn} className={style.showBtn}>
            {show ? "Show Less" : " Show More"}
          </button>
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
