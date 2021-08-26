/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://www.anapioficeandfire.com/api/books?page=1&pageSize=50",
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
