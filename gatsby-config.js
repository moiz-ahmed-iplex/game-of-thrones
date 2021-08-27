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
  ],
}
