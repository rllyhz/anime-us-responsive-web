const express = require("express"),
  router = express.Router(),
  { get, post, getBaseUrl } = require("../api/apiClient"),
  { Nav, TYPE } = require("../config/navigation")

const nav = new Nav(TYPE.CHARACTERS)

router.get("/", async (req, res) => {
  const result = await get(getBaseUrl() + `search/character?q=Asuna&page=1`)
  const characters = await result.results

  const data = {
    nav,
    title: "Characters",
    characters
  }

  res.render("character/search", data)
})


router.get("/show/:id", async (req, res) => {
  if (!req.params.id) return res.send("Invalid Id!")

  const result = await get(getBaseUrl() + `character/${req.params.id}`)

  const character = {
    id: result.mal_id,
    name: result.name,
    image_url: result.image_url,
    about: result.about,
    animeography: result.animeography,
    mangaography: result.mangaography
  }

  const data = {
    nav,
    title: "Character Detail",
    character,
    styles: [
      "character/show"
    ]
  }

  res.render("character/show", data)
})

module.exports = router