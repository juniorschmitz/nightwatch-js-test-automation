
var userActions = {
  expectLoggedUser: function(username) {
    return this
      .waitForElementPresent('@userInfo', 3000)
      .assert.containsText('@userInfo', username)
  }
}


module.exports = {
  commands: [userActions],
  elements: {
    userInfo: '.user .info span'
  }
}