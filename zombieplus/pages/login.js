
var loginActions = {
  // with: (email, pass) => { o NightwatchJS não suporta arrow function (ES6) na camada de Page Object
  with: function(email, pass) {
    return this
      .navigate()
      .waitForElementPresent('@form', 3000)
      .setValue('@emailInput', email)
      .setValue('@passInput', pass)
      .click('@loginButton')
  },
  expectAlertDanger: function() {
    return this
      .waitForElementPresent('@alertDanger', 3000)
      .assert.containsText('@alertDanger', text)
  },
  expectAlertInfo: function() {
    return this
      .waitForElementPresent('@alertInfo', 3000)
      .assert.containsText('@alertInfo', text)
  }
}

module.exports = {
  url: '/login',
  commands: [loginActions],
  elements: {
    form: '.card-login',
    emailInput: 'input[name=email]',
    passInput: 'input[name=password]',
    loginButton: '.login-button',
    alertDanger: '.alert-danger',
    alertInfo: '.alert-info'
  }
}