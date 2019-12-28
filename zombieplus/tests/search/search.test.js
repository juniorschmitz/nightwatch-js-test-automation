import pg from '../../lib/db'

let movieData = {}

module.exports = {

    before: function(browser) {
        movieData = {
          title: "Meu Namorado é um Zumbi",
          status: "Disponível",
          year: 2013,
          releaseDate: "01/05/2013",
          cast: ["Nicholas Hoult","Teresa Palmer","Analeign Tipson", "Rob Coddry"],
          cover: "meu-namo-zumbi.jpg",
          plot: "Em um mundo pós-apocaliptico, um Zumbi romântico se apaixona por uma humana."
        }

        pg.removeByTitle(movieData.title).then(function() {
          pg.insertMovie(movieData)
        })

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('zombiepotato@potato.com', 'pwd123')
        sidebar.expectLoggedUser('ZombiePotato')
  },

  'when i search by title': function(browser) {
      let movie = browser.page.movie()

      movie
          .setValue('@searchInput', movieData.title)
          .click('@searchIcon')
  },
  'then the title should appear on the list': function(browser) {
      let movie = browser.page.movie()

      movie.assertSearchOneMovie(movieData.title)
  }
}