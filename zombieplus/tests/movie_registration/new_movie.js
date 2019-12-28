import pg from '../../lib/db'

let movieData = {}
module.exports = {
  
  before: function(browser) {
    let login = browser.page.login()
    login.with('zombiepotato@potato.com', 'pwd123')
    sidebar.expectLoggedUser('ZombiePotato')
  },

  'given i have a new movie': function(browser) {
    movieData = {
      title: "Resident Evil",
      status: "Disponível",
      year: 2002,
      releaseDate: "01/05/2002",
      cast: ["Milla Jovovich","Ali Later","Ian Glen", "Shawn Roberts"],
      cover: "resident-evil-2002.jpg",
      plot: "A missão do esquadrão e da Alice é desligar a Rainha Vermelha e coletar dados sobre o incidente."
    }

    pg.removeByTitle(movieData.title)
  },

  'when i make the movie registration': function(browser) {
      console.log(movieData)

      let movie = browser.page.movie()
      movie
          .goToCreateForm()
          .setValue('@titleInput', movieData.title)
          .selectStatus(movieData.status)
          .setValue('@yearInput', movieData.year)
          .setValue('@dateInput', movieData.releaseDate)
          .insertCast(movieData.cast)
          .setValue('@plotInput', movieData.plot)
          .uploadCover(movieData.cover)
          .pause(5000) // sleep
          .click('@createButton')
  },

  'then the movie should be registered': function(browser) {
      let movie = browser.page.movie()
      movie
          .assertMovieRegistered()
  }
}