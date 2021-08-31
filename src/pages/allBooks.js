import React from "react"
import { graphql } from "gatsby"
import * as style from "./allBooks.module.css"
import Layout from "../components/Layout"
import AOS from "aos"
import "aos/dist/aos.css"

const allBooks = ({ data }) => {
  if (typeof window !== "undefined") {
    AOS.init()
  }
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.wrapper}>
          {data.allBooks.edges.map(book => (
            <div className={style.contentHolder}>
              <div className={style.textdiv}>
                <h1
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                >
                  {book.node.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                >
                  <p> author: {book.node.authors}</p>
                  <p>mediatype: {book.node.mediaType}</p>
                  <p>publishe: {book.node.publisher}</p>
                  <p>released: {book.node.released}</p>
                  <p>isbn :{book.node.isbn}</p>
                  <p>country of publish :{book.node.country}</p>
                </div>
              </div>
              <div
                className={style.cover}
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1000"
              >
                <img src={`/BookCovers/${book.node.name}.jpg`} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default allBooks

export const query = graphql`
  {
    allBooks {
      edges {
        node {
          name
          publisher
          released
          country
          authors
          mediaType
          isbn
        }
      }
    }
  }
`
