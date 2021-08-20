/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://www.anapioficeandfire.com/api/books",
        rootKey: "books",
        schemas: {
          books: `
            url:String
            name:String
            isbn:String
            authors:[String]
            numberOfPages:Int
            publiser:String
            country:String
            mediaType:String
            released:String
            character:[String]
            povCharacters:[String]
          `,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://www.anapioficeandfire.com/api/houses",
        rootKey: "houses",
        schemas: {
          houses: `
              url:String
              name:String
              region:String
              coatOfArms:String
              words:String
              titles:[String]
              seats:[String]
              currentLord:String
              heir:String
              overlord:String
              founded:String
              founder:String
              diedOut:String
              ancestralWeapons:[String]
              cadetBranches:[String]
              swornMembers:[String]
           `,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://www.anapioficeandfire.com/api/characters",
        rootKey: "character",
        schemas: {
          character: `
              url:String
              name:String
              gender:String
              culture:String
              born:String
              died:String
              titles:[String]
              aliases:[String]
              father:String
              mother:String
              spouse:String
              alegiances:[String]
              books:[String]
              povBooks:[String]
              tvSeries:[String]
              playedBy:[String]
           `,
        },
      },
    },
  ],
}
