import React, { useState, useEffect, useCallCharacterback } from "react"
import * as style from "./allCharacters.module.css"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"
import Layout from "../components/Layout"

export default function AllCharacters({ data }) {
  if (typeof window !== "undefined") {
    AOS.init()
  }

  const [dataList, setdataList] = useState([])
  useEffect(() => {
    setdataList(data?.allCharacter?.edges)
  }, [data])

  function handlechange(e) {
    const value = e.target.value
    const dumyData = data?.allCharacter?.edges || []
    setdataList(
      dumyData.filter(house => {
        let name = house?.node?.name?.toLowerCase()
        return name?.includes(value?.toLowerCase())
      })
    )
  }

  return (
    <Layout>
      <div className={style.container}>
        <div className={style.heading}>
          <div className={style.logo} />
          <h1>All Characters</h1>
          <input
            type="text"
            placeholder="Search...."
            className={style.search}
            onChange={handlechange}
          />
        </div>
        <div
          className={style.wrapper}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
        >
          {dataList?.map(character => (
            <Link
              to={"/characterDetails/" + character.node.name + "/"}
              className={style.route}
            >
              {character.node.name}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allCharacter(filter: { name: { ne: "" } }) {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`
