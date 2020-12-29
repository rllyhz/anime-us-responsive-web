function handleFormSearch(event) {
  event.preventDefault()

  const form = new FormData(this)
  const keyword = form.get("keyword")
  location.href = "/search/?keyword=" + keyword
}


function pageLoaded() {
  setStyle(getElem(".progress"), "display", "none")
  addEvent(getElem(".menu-icon"), "click", e => {
    toggleClass(getElem(".nav-links"), "show")
  })

  const searchFormInput = getElem("#search-here")

  if (searchFormInput && typeof searchFormInput !== "undefined" && searchFormInput !== null) {
    setOnSubmit(searchFormInput, handleFormSearch)
  }
}

window.addEventListener("load", pageLoaded)