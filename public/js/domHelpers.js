// ------------------ ELEMENTS ---------------------
function createElem(tagname) {
  return document.createElement(tagname)
}

function removeElem(elem) {
  elem.remove()
}

function getElem(cssSelector) {
  return document.querySelector(cssSelector)
}

function getElems(cssSelector) {
  return document.querySelectorAll(cssSelector)
}

function getParent(elem) {
  // return elem.parentNode
  return elem.parentElement
}

function getChildren(elem) {
  // return elem.children
  return elem.childNodes
}

function appendChild(elem, child) {
  elem.appendChild(child)
}

function append(elem, html) {
  elem.append(html)
}

function setInnerHTML(elem, html = "") {
  elem.innerHTML = html
}

function getInnerHTML(elem) {
  if (elem.innerHTML) {
    return elem.innerHTML
  }
  return undefined
}

function setTextElem(elem, text = "") {
  elem.text = text
}

function getTextElem(elem) {
  if (elem.text) {
    return elem.text
  }
  return undefined
}


// ------------------ DATASETS ---------------------
function getDataset(elem, name = null) {
  if (name != null && elem.dataset[name]) {
    return elem.dataset[name]
  }
  return elem.dataset
}

// ------------------ CLASSES ---------------------
function containsClass(elem, className) {
  return elem.classList.contains(className)
}

function addClass(elem, className) {
  if (!containsClass(elem, className)) elem.classList.add(className)
}

function addClasses(elem, classes = []) {
  if (classes.length > 0) {
    classes.forEach(className => {
      addClass(elem, className)
    })
  }
}

function removeClass(elem, className) {
  if (containsClass(elem, className)) elem.classList.remove(className)
}

function removeClasses(elem, classes = []) {
  if (classes.length > 0) {
    classes.forEach(className => {
      removeClass(elem, className)
    })
  }
}

function toggleClass(elem, className) {
  elem.classList.toggle(className)
}

// ------------------ ATTRIBUTES ---------------------
function setAttribute(elem, attrName = "", value = "") {
  elem.setAttribute(attrName, value)
}

function getAttribute(elem, attrName) {
  return elem.getAttribute(attrName)
}

function getId(elem) {
  return elem.id
}

// ------------------ STYLES ---------------------
function setStyle(elem, property = "", value = "") {
  elem.style[property] = value
}

function setStyles(elem, styles = {}) {
  const keys = Object.keys(styles)

  if (keys.length > 0) {
    keys.forEach(property => {
      setStyle(elem, property, styles[property])
    })
  }
}


// ------------------ VISIBILITY ---------------------
function hide(elem) {
  setStyles(elem, {
    display: "none",
    visibility: "hidden",
    pointerEvents: "none",
    opacity: "0"
  })
}

function show(elem, display = "block") {
  setStyles(elem, {
    display: display,
    visibility: "visible",
    pointerEvents: "all",
    opacity: "1"
  })
}

// ------------------ EVENTS ---------------------
function addEvent(elem, event, handle) {
  elem.addEventListener(event, handle)
}

function removeEvent(elem, event, handle) {
  elem.removeEventListener(event, handle)
}

function setOnClick(elem, handle) {
  elem.addEventListener("click", handle)
}

function setOnSubmit(elem, handle) {
  elem.addEventListener("submit", handle)
}



// ------------------ OTHER ELEMENTS ---------------------
function createLink(url = "") {
  const linkElem = createElem("a")
  setAttribute(linkElem, "href", url)
  return linkElem
}

const HEADING = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
},
  availableHeadingElem = Object.keys(HEADING);

function createHeading(variant = "h1") {
  let headingAvailable = false

  availableHeadingElem.forEach(headingType => {
    if (headingType == variant) { headingAvailable = true; return; }
  })

  if (headingAvailable) {
    return createElem(variant)
  }
}