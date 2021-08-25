import React, { useState, useEffect } from "react"
import * as style from "./allhouses.module.css"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Allhouses({ data }) {
  if (typeof window !== "undefined") {
    AOS.init()
  }
  const [dataList, setdataList] = useState([])
  useEffect(() => {
    setdataList(data?.allHouse?.edges)
  }, [data])

  function handlechange(e) {
    const value = e.target.value
    const dumyData = data?.allHouse?.edges || []
    setdataList(
      dumyData.filter(house => {
        let name = house?.node?.name?.toLowerCase()
        return name?.includes(value?.toLowerCase())
      })
    )
  }
  return (
    <div className={style.container}>
      <div className={style.heading}>
        <div className={style.logo} />
        <h1>all Houses</h1>
        <input
          type="text"
          placeholder="Search...."
          className={style.search}
          onChange={handlechange}
        />
      </div>
      <div className={style.wrapper}>
        {dataList?.map(house => (
          <Link
            to={"/houseDetails/" + house.node.name}
            className={style.route}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1500"
          >
            {house.node.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allHouse {
      edges {
        node {
          name
        }
      }
    }
  }
`
