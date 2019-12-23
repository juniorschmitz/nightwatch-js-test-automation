module.exports = {

  beforeEach: (browser) => {
    browser.resizeWindow(1920, 1080)
  },

  after: (browser) => {
    browser.end();
  },

  'Incorrect password': (browser) => {
    let login = browser.page.login()
    login
      .with('zombiepotato@potato.com', 'abc123')
      .waitForElementVisible('@alertDanger', 3000)
      .assert.containsText('@alertDanger', 'Usuário e/ou senha inválida')
  },
  'Not registered': (browser) => {
    let login = browser.page.login()
    login
      .with('zombiepotatnotregistered@potato.com', 'abc123')
      .waitForElementVisible('@alertDanger', 3000)
      .assert.containsText('@alertDanger', 'Usuário e/ou senha inválida')
  },
  'E-mail not informed': (browser) => {
    let login = browser.page.login()
    login
      .with('', 'abc123')
      .waitForElementVisible('@alertInfo', 3000)
      .assert.containsText(alert, 'Oops, Cadê o email?')
  },
  'Password not informed': (browser) => {
    let login = browser.page.login()
    login
      .with('zombiepotatnotregistered@potato.com', '')
      .waitForElementVisible('@alertInfo', 3000)
      .assert.containsText(alert, 'Oops, Cadê a senha?')
  }
}