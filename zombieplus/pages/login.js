
var loginAction = {
  // with: (email, pass) => { o NightwatchJS não suporta arrow function (ES6) na camada de Page Object
  with: function(email, pass) {
    return this
      .navigate()
      .waitForElementVisible('@form', 3000)
      .setValue('@emailInput', email)
      .setValue('@passInput', pass)
      .click('@loginButton')
  }
}

module.exports = {
  url: 'http://zombie-web:5000/login',
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