const path = require("path")
const axios = require("axios")
const fetch = require("isomorphic-fetch")

module.exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions
  //get the action that will create a new node in our GraphQL API
  let i = 1
  let dataArr = []
  while (i <= 9) {
    const data = await fetch(
      `https://www.anapioficeandfire.com/api/houses?page=${i}&pageSize=50`
    )
    //fetch our data
    const parsed = await data.json()
    dataArr = [...dataArr, ...parsed]
    i++
  }

  //turn it from a string to JSON, in this case an Array
  dataArr.forEach((house, i) => {
    //for each house and index
    const nodeContent = JSON.stringify(house)
    //create a string of that data
    const nodeMeta = {
      id: createNodeId("house" + i),
      //add geo to the index to create unique id
      parent: null,
      children: [],
      internal: {
        type: `house`,
        //gives internal typing for GraphQL
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(house),
      },
    }
    const node = Object.assign({}, house, nodeMeta)
    //combining everything
    createNode(node)
    //putting it in the GQL!
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
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

  return Promise.all(
    result.data.allHouse.edges.map(async edge => {
      let resOverlord = ""
      if (edge.node.overlord.length !== 0) {
        resOverlord = await axios.get(edge.node.overlord)
      }
      let resCurrentLord = ""
      if (edge.node.currentLord.length !== 0) {
        resCurrentLord = await axios.get(edge.node.currentLord)
      }
      let resHeir = ""
      if (edge.node.heir.length !== 0) {
        const resHeir = await axios.get(edge.node.heir)
      }
      let resFounder = ""
      if (edge.node.founder.length !== 0) {
        const resFounder = await axios.get(edge.node.founder)
      }
      let resCadetBranches = []
      if (edge.node.cadetBranches.length !== 0) {
        for (i = 0; i < edge.node.cadetBranches.length; i++) {
          let url = await axios.get(edge.node.cadetBranches[i])
          resCadetBranches.push(url.data.name)
        }
      }
      let resSwornMembers = []
      if (edge.node.swornMembers.length !== 0) {
        for (i = 0; i < edge.node.swornMembers.length; i++) {
          let url = await axios.get(edge.node.swornMembers[i])
          resSwornMembers.push(url.data.name)
        }
      }
      await createPage({
        path: "/houseDetails/" + edge.node.name + "/",
        component: path.resolve("./src/pages/houseDetails.js"),
        context: {
          id: edge.node.id,
          overlord: resOverlord?.data?.name,
          currentLord: resCurrentLord?.data?.name,
          heir: resHeir?.data?.name,
          founder: resFounder?.data?.name,
          cadetBranches: resCadetBranches,
          swornMembers: resSwornMembers,
        },
      })
    })
  )
}
