const axios = require("axios")

const BASE_URL = "https://api.jikan.moe/v3/"

function getBaseUrl() {
  return BASE_URL
}

async function get(url = "") {
  let res = await axios.get(url)
  res = await res.data

  return await res
}

async function post(url = "", data) {
  let res = await axios.post(url, data)
  res = await res.data

  return await res
}

module.exports = {
  get,
  post,
  getBaseUrl
}