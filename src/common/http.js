export const fetchResource = (url, options) => {
  return fetch(process.env.REACT_APP_ENVIRONMENT === "production" ?
    "https://api.stocket.io" + url : "http://localhost:3000" + url, options)
}
