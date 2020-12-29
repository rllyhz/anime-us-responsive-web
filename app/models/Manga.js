class Manga {
  id
  title
  title_japanese
  image_url
  type
  status
  volumes
  chapters
  publishing
  rank
  score
  synopsis
  genre
  authors

  constructor(id, title, title_japanese, image_url, type, status, volumes, chapters, publishing, rank, score, synopsis, genre, authors) {
    this.id = id
    this.title = title
    this.title_japanese = title_japanese
    this.image_url = image_url
    this.type = type
    this.status = status
    this.volumes = volumes
    this.chapters = chapters
    this.publishing = publishing
    this.rank = rank
    this.score = score
    this.synopsis = synopsis
    this.genre = genre
    this.authors = authors
  }
}

module.exports = Manga