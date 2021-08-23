const path = require("path")
const axios = require("axios")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allHouses {
        edges {
          node {
            id
            name
            overlord
            currentLord
            heir
          }
        }
      }
    }
  `)
  return Promise.all(
    result.data.allHouses.edges.map(async edge => {
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
      await createPage({
        path: "/houseDetails/" + edge.node.name + "/",
        component: path.resolve("./src/pages/houseDetails.js"),
        context: {
          id: edge.node.id,
          overlord: resOverlord?.data?.name,
          currentLord: resCurrentLord?.data?.name,
          heir: resHeir?.data?.name,
        },
      })
    })
  )
}
