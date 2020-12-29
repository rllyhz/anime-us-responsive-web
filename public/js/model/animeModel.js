class Anime {
  id
  title
  type
  url
  imageUrl
  startDate
  endDate
  isAiring
  totalEpisodes
  synopsis
  rated
  score

  constructor(id, title, type, url, imageUrl, startDate, endDate, isAiring, totalEpisodes, synopsis, rated, score) {
    this.id = id
    this.title = title
    this.type = type
    this.url = url
    this.imageUrl = imageUrl
    this.startDate = startDate
    this.endDate = endDate
    this.isAiring = isAiring
    this.totalEpisodes = totalEpisodes
    this.synopsis = synopsis
    this.rated = rated
    this.score = score
  }

  get getId() {
    return this.id
  }

  get getTitle() {
    return this.title
  }

  get getType() {
    return this.type
  }

  get getUrl() {
    return this.url
  }

  get getImageUrl() {
    return this.imageUrl
  }

  get getStartDate() {
    return this.startDate
  }

  get getEndDate() {
    return this.endDate
  }

  get isAiring() {
    return this.isAiring
  }

  get getTotalEpisodes() {
    return this.totalEpisodes
  }

  get getSynopsis() {
    return this.synopsis
  }

  get getRated() {
    return this.rated
  }

  get getScore() {
    return this.score
  }
}