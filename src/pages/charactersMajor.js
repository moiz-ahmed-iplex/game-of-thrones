import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
const CharacterMajor = () => {
  return (
    <Layout>
      <div>
        <h1>Characters Of the Great Houses</h1>
        <Link t0="/"> Click here to view all the Characters of the series</Link>
        <div>Stark</div>
        <div>Lannister</div>
        <div>Targerrian</div>
        <div>Greyjoy</div>
        <div>Tyrell</div>
        <div>Baratheon</div>
        <div>nymerios</div>
        <div>tully</div>
        <div>arryn</div>
      </div>
    </Layout>
  )
}

export default CharacterMajor
