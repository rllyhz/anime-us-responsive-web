const BASE_URL = "https://api.jikan.moe/v3"

// ENDPOINTS
// https://api.jikan.moe/v3/anime/{id}/  Anime by Id
// https://api.jikan.moe/v3/anime/{id}/episodes  The Episodes of Anime by Id
// https://api.jikan.moe/v3/anime/{id}/pictures  The Pictures of Anime by Id
// https://api.jikan.moe/v3/anime/{id}/videos  The Videos of Anime by Id
// https://api.jikan.moe/v3/anime/{id}/stats  The Status of Anime by Id
// https://api.jikan.moe/v3/search/anime?q={anime_title}&page=1 Search for an anime

function createSearchURL(type = "anime", keyword = "", opt = {}) {
  // `${BASE_URL}/search/anime?q=${keyword}&page=1`
  return `${BASE_URL}/search/${type}?q=${keyword}&page=1`
}

async function get(url) {
  let response = await fetch(url);
  response = await response.json()
  return response
}

async function searchAnime(keyword) {
  const url = createSearchURL("anime", keyword)
  const data = await get(url)
  return data
}

async function searchManga(keyword) {
  const url = createSearchURL("manga", keyword)
  const data = await get(url)
  return data
}

async function getAnimeById(id) {
  const url = `${BASE_URL}/anime/${id}/`
  const data = await get(url)
  return data
}

function generateAnimeList(data) {
  const animeList = []

  data.forEach(anime => {
    const animeItem = new Anime(anime.mal_id, anime.title, anime.type, anime.url, anime.image_url,
      anime.start_date, anime.end_date, anime.airing, anime.episodes, anime.synopsis,
      anime.rated, anime.score)

    animeList.push(animeItem)
  })

  return animeList
}

function handleAnimeResult(data) {
  const { results, last_page } = data
  const animeList = generateAnimeList(results)
}