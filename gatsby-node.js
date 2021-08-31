const path = require("path")
const axios = require("axios")
const fetch = require("isomorphic-fetch")

module.exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions
  const fetchHouses = async () => {
    let i = 1
    let dataArr = []
    while (i <= 9) {
      const data = await fetch(
        `https://www.anapioficeandfire.com/api/houses?page=${i}&pageSize=50`
      )
      const parsed = await data.json()
      dataArr = [...dataArr, ...parsed]
      i++
    }
    dataArr.forEach((house, i) => {
      const nodeContent = JSON.stringify(house)
      const nodeMeta = {
        id: createNodeId("house" + i),
        parent: null,
        children: [],
        internal: {
          type: `house`,
          mediaType: `text/html`,
          content: nodeContent,
          contentDigest: createContentDigest(house),
        },
      }
      const node = Object.assign({}, house, nodeMeta)
      createNode(node)
    })
  }
  const fetchCharacters = async () => {
    let i = 1
    let dataArr = []
    while (i <= 43) {
      const data = await fetch(
        `https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=50`
      )
      const parsed = await data.json()
      dataArr = [...dataArr, ...parsed]
      i++
    }
    dataArr.forEach((character, i) => {
      const nodeContent = JSON.stringify(character)
      const nodeMeta = {
        id: createNodeId("character" + i),
        parent: null,
        children: [],
        internal: {
          type: `character`,
          mediaType: `text/html`,
          content: nodeContent,
          contentDigest: createContentDigest(character),
        },
      }
      const node = Object.assign({}, character, nodeMeta)
      createNode(node)
    })
  }
  await fetchHouses()
  await fetchCharacters()
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allCharacter(filter: { name: { ne: "" } }) {
        edges {
          node {
            name
            id
            father
            mother
            allegiances
            spouse
            books
          }
        }
      }
    }
  `)
  result.data.allCharacter.edges.forEach(({ node }) => {
    createPage({
      path: "/characterDetails/" + node.name + "/",
      component: path.resolve("./src/pages/characterDetails.js"),
      context: {
        id: node.id,
        father: node.father,
        mother: node.mother,
        spouse: node.spouse,
        books: node.books,
        allegiances: node.allegiances,
      },
    })
  })

  const houses = await graphql(`
    {
      allHouse {
        edges {
          node {
            id
            name
            overlord
            currentLord
            heir
            founder
            cadetBranches
            swornMembers
          }
        }
      }
    }
  `)
  let ss = []
  let index = 0
  for (let item of houses.data.allHouse.edges) {
    index++
    console.log("INDEX", index)
    createPage({
      path: "/houseDetails/" + item.node.name + "/",
      component: path.resolve("./src/pages/houseDetails.js"),
      context: {
        id: item.node.id,
        overlord: item.node.overlord,
        currentLord: item.node.currentLord,
        heir: item.node.heir,
        founder: item.node.founder,
        cadetBranches: item.node.cadetBranches,
        swornMembers: item.node.swornMembers,
      },
    })
  }
}
