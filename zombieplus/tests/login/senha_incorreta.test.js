module.exports = {

  'Incorrect password': (browser) => {
    let login = browser.page.login()
    login
      .with('zombiepotato@potato.com', 'abc123')
      .expectAlertDanger('Usuário e/ou senha inválida')
  }
}