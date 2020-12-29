function getBaseUrl() {
  return window.location.protocol + "//" + location.host.split(":")[0] + ":" + window.location.port;
}

const LINKS = {
  detailAnime: `${getBaseUrl()}/detail_anime.html`
}

function createContainerElem() {
  const containerElem = createElem("div")
  addClass(containerElem, "container")
  return containerElem
}

function createRowElem() {
  const rowElem = createElem("div")
  addClass(rowElem, "row")
  return rowElem
}

function createColumnElem(smallSize = 12, mediumSize = 12, largeSize = 12) {
  if (smallSize > 12 || mediumSize > 12 || largeSize > 12) return

  const colElem = createElem("div")
  addClass(colElem, "col")
  addClass(colElem, `s${smallSize}`)
  addClass(colElem, `m${mediumSize}`)
  addClass(colElem, `l${largeSize}`)
  return colElem
}

function createGrid(smallSize = 12, mediumSize = 12, largeSize = 12) {
  if (smallSize > 12 || mediumSize > 12 || largeSize > 12) return

  return [
    createRowElem(),
    createColumnElem(smallSize, mediumSize, largeSize)
  ]
}

function createCard(cardTitle = "", cardContents = "") {
  const cardElem = createElem("div")
  const contentCardElem = createElem("div")

  addClass(contentCardElem, "card-content")
  addClass(contentCardElem, "white-text")

  addClass(cardElem, "card")
  addClass(cardElem, "blue-grey")
  addClass(cardElem, "darken-1")

  let contents

  if (typeof cardContents == "string") {
    contents = `
      <span class="card-title">${cardTitle}</span>
      <div class="card-content">${cardContents}</div>
    `
    setInnerHTML(contentCardElem, contents)

  } else {
    const title = createElem("span")
    addClass(title, "card-title")
    setInnerHTML(title, cardTitle)

    const contentContainer = createElem("div")
    addClass(contentContainer, "card-content")
    appendChild(contentContainer, cardContents)

    appendChild(contentCardElem, title)
    appendChild(contentCardElem, contentContainer)
  }

  appendChild(cardElem, contentCardElem)
  return cardElem
}