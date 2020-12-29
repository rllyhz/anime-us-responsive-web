async function handleFormSearch(event) {
  event.preventDefault()

  const form = new FormData(this)
  const keyword = form.get("keyword")
  location.href = "/search/?keyword=" + keyword
}


function pageLoaded() {
  setOnSubmit(getElem("#search-here"), handleFormSearch)
  setStyle(getElem(".progress"), "display", "none")
}

window.addEventListener("load", pageLoaded)