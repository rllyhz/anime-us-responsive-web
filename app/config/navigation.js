const HOME = 0;
const ANIME = 1;
const MANGA = 2;
const CHARACTERS = 3;
const SEARCH = 4;

class Nav {
  home = false;
  anime = false;
  manga = false;
  characters = false;
  search = false;

  constructor(type) {
    if (HOME == type) this.home = true
    if (ANIME == type) this.anime = true
    if (MANGA == type) this.manga = true
    if (CHARACTERS == type) this.characters = true
    if (SEARCH == type) this.search = true
  }
}

module.exports = {
  Nav,
  TYPE: {
    HOME,
    ANIME,
    MANGA,
    CHARACTERS,
    SEARCH,
  },
}