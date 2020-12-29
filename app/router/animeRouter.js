const express = require("express"),
  router = express.Router(),
  { getBaseUrl, get, post } = require("../api/apiClient"),
  { Nav, TYPE } = require("../config/navigation"),
  Anime = require("../models/Anime"),
  Manga = require("../models/Manga")

const nav = new Nav(TYPE.ANIME)


router.get("/", async (req, res) => {

  const animeResult = await get(getBaseUrl() + "top/anime/1")

  const data = {
    title: "Anime List",
    styles: [],
    nav,
    animeList: animeResult.top
  }

  res.render("anime/index", data)
})

router.get("/show/:id", async (req, res) => {
  if (!req.params.id) return res.send("Invalid Id!")

  const animeId = req.params.id
  const animeResult = await get(getBaseUrl() + `anime/${animeId}/`)

  const anime = new Anime(
    animeResult.mal_id, animeResult.image_url, animeResult.trailer_url,
    animeResult.title, animeResult.title_japanese, animeResult.type, animeResult.episodes, animeResult.duration,
    animeResult.rating, animeResult.score, animeResult.synopsis, animeResult.opening_themes, animeResult.ending_themes,
    animeResult.genres.map(genre => genre.name).join(", "),
    animeResult.producers.map(producer => producer.name).join(", "),
    animeResult.studios.map(studio => studio.name).join(", "),
    animeResult.source,
    animeResult.rank,
    animeResult.status
  )

  const adaptations = animeResult.related.Adaptation,
    relatedOtherAnime = animeResult.related.Other


  const data = {
    nav,
    title: "Anime Detail",
    styles: [
      "anime/show"
    ],
    animeId,
    anime,
    adaptations,
    relatedOtherAnime
  }

  res.render("anime/show", data)
})

module.exports = router