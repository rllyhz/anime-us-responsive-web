class Anime {
  id
  image_url
  trailer_url
  title
  title_japanese
  type
  total_episodes
  duration
  rating
  score
  synopsis
  opening_themes
  ending_themes
  genre
  producers
  studios
  source
  rank
  status

  constructor(id, image_url, trailer_url, title, title_japanese, type, total_episodes, duration, rating
    , score, synopsis, opening_themes, ending_themes, genre, producers, studios, source, rank, status) {
    this.id = id
    this.image_url = image_url
    this.trailer_url = trailer_url
    this.title = title
    this.title_japanese = title_japanese
    this.type = type
    this.total_episodes = total_episodes
    this.duration = duration
    this.rating = rating
    this.score = score
    this.synopsis = synopsis
    this.opening_themes = opening_themes
    this.ending_themes = ending_themes
    this.genre = genre
    this.producers = producers
    this.studios = studios
    this.source = source
    this.rank = rank
    this.status = status
  }
}

module.exports = Anime