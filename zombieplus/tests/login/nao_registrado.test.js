module.exports = {
  'Not registered': (browser) => {
    let login = browser.page.login()
    login
      .with('zombiepotatnotregistered@potato.com', 'abc123')
      .expectAlertDanger('Usuário e/ou senha inválida')
  }
}