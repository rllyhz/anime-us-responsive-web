const express = require("express"),
  { get, post, getBaseUrl } = require("../api/apiClient"),
  { Nav, TYPE } = require("../config/navigation")

const router = express.Router()

router.get("/", async (req, res) => {
  const topAnime = await get(getBaseUrl() + "top/anime/1")
  const topManga = await get(getBaseUrl() + "top/manga/1")
  const topFirstAnimeId = topAnime.top[0].mal_id
  const topFirstAnime = await get(getBaseUrl() + "anime/" + topFirstAnimeId)
  const topFirstAnimeGenres = topFirstAnime.genres.map(genre => genre.name).join(", ")

  const nav = new Nav(TYPE.HOME)

  const data = {
    title: "Home",
    jsFiles: [
      "index"
    ],
    styles: [
      "home/index"
    ],
    nav,
    topManga: topManga.top,
    topAnime: topAnime.top,
    topFirstAnime,
    topFirstAnimeGenres
  }

  return res.render("index", data)
})


router.get("/search", async (req, res) => {
  if (!req.query.keyword) return res.send("Keyword not given!")

  const keyword = req.query.keyword
  const nav = new Nav(TYPE.SEARCH)

  let animeList, mangaList, characterList
  const resultAnime = await get(`https://api.jikan.moe/v3/search/anime?q=${keyword}&page=1`)
  const resultManga = await get(`https://api.jikan.moe/v3/search/manga?q=${keyword}&page=1`)
  const resultCharacters = await get(`https://api.jikan.moe/v3/search/character?q=${keyword}&page=1`)

  if (resultAnime.results.length > 0) {
    animeList = resultAnime.results
  }
  if (resultManga.results.length > 0) {
    mangaList = resultManga.results
  }
  if (resultCharacters.results.length > 0) {
    characterList = resultCharacters.results
  }

  return res.render("search", {
    title: "Search",
    animeList,
    mangaList,
    characterList,
    keyword,
    styles: [
      'home/search'
    ],
    nav
  })
})

module.exports = router