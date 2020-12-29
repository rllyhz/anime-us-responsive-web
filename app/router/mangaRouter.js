const express = require("express"),
  router = express.Router(),
  { getBaseUrl, get, post } = require("../api/apiClient"),
  { Nav, TYPE } = require("../config/navigation"),
  Anime = require("../models/Anime"),
  Manga = require("../models/Manga")

const nav = new Nav(TYPE.MANGA)


router.get("/", async (req, res) => {

  const mangaResult = await get(getBaseUrl() + "top/manga/1")
  const data = {
    title: "Manga List",
    nav,
    mangaList: mangaResult.top
  }

  res.render("manga/index", data)
})

router.get("/show/:id", async (req, res) => {
  if (!req.params.id) return res.send("Invalid Id!")

  const mangaId = req.params.id
  const mangaResult = await get(getBaseUrl() + `manga/${mangaId}`)

  const manga = new Manga(mangaResult.mal_id, mangaResult.title, mangaResult.title_japanese, mangaResult.image_url, mangaResult.type,
    mangaResult.status, mangaResult.volumes, mangaResult.chapters, mangaResult.publishing, mangaResult.rank, mangaResult.score,
    mangaResult.synopsis, mangaResult.genres.map(genre => genre.name).join(", "),
    mangaResult.authors.map(author => author.name).join(", "))

  let adaptations, sequel, relatedOtherManga

  if (mangaResult.related.Adaptation) adaptations = mangaResult.related.Adaptation
  if (mangaResult.related.Sequel) sequel = mangaResult.related.Sequel
  if (mangaResult.related.Other) relatedOtherManga = mangaResult.related.Other

  const data = {
    nav,
    title: "Manga Detail",
    manga,
    adaptations,
    sequel,
    relatedOtherManga,
    styles: [
      "manga/show"
    ]
  }

  return res.render("manga/show", data)
})

module.exports = router