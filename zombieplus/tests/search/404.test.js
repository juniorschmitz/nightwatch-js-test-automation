module.exports = {
    '@tags': ['smoke', '404'],

    before: function() {
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('zombiepotato@potato.com', 'pwd123')
        sidebar.expectLoggedUser('ZombiePotato')
    },

    'when i search for a not registered title': function(browser) {
        let movie = browser.page.movie()

        movie
          .setValue('@searchInput', 'Não é mais um besteirol americano')
          .click('@searchIcon')
    },
    'then i should see a alert message saying the movie was not found': function(browser) {
        let movie = browser.page.movie()

        movie
            .waitForElementVisible('@alertDanger', 10000)
            .assert.containsText('@alertDanger', 'Puxa! não encontramos nada aqui :(')
    }
}