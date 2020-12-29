setStyle(getElem(".progress"), "display", "none")
addEvent(getElem(".menu-icon"), "click", e => {
  toggleClass(getElem(".nav-links"), "show")
})