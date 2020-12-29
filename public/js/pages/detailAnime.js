async function pageLoaded() {
  setStyle(getElem(".progress"), "display", "none")
  const params = new URLSearchParams(window.location.search);

  if (!params.get("id")) return history.back()

  const data = await getAnimeById(params.get("id"))
  console.log(data)
}

window.addEventListener("load", pageLoaded)