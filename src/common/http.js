export const fetchResource = (url, options) =>
  fetch(process.env.GATSBY_ENVIRONMENT === "production" ?
    "https://api.stocket.io" + url : "http://localhost:3000" + url, options)
