const production = "https://api.stacket.io"
const development = "http://localhost:3000"

export const fetchResource = (url, options) =>
  fetch(process.env.GATSBY_ENVIRONMENT === "production" ?
    production + url : development + url, options)
