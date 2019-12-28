var movieActions = {
  goToCreateForm: function() {
    return this
        .click('@addButton')
        .waitForElementPresent('@movieForm', 3000)
  },
  selectStatus: function(status) {
      return this
          .click('@statusSelect')
          .useXpath()
          .waitForElementPresent(`//li//span[contains(text(),"${status}"`, 2000)
          .click(`//li//span[contains(text(),"${status}"`)
          .useCss()
  },
  insertCast: function(cast) {
    const browser = this

    cast.forEach(function(actor) {
       browser
          .setValue('@castInput', actor)
          .keys(browser.api.Keys.TAB)
    })

    return this 
  },
  assertMovieRegistered: function() {
    return this
        .waitForElementPresent('@list', 5000)
        .assert.constainsText('@list', movieData.title)
  },
  uploadCover: function(fileName) {
    let fullPath = require('path').resolve(__dirname, '../images' + fileName)
    console.log(fullPath)
    return this
        .setValue('@uploadCover', fullPath)
        .pause(1000)
        .assert.attributeContains('.picture-src', 'src', 'blob')
  }
}

module.exports = {
  
  commands: [movieActions],
  elements: {
    addButton: '.movie-add',
    movieForm: '#movie-form',
    titleInput: 'input[name="title"]',
    statusSelect: 'input[placeholder="Status"]',
    yearInput: 'input[name="year"]',
    dateInput: 'input[name="releaseDate"]',
    castInput: '.cast',
    plotInput: 'textarea[name="overview"]',
    uploadCover: 'input#upcover',
    createButton: '#create-movie',
    list: 'table tbody'
  }
}