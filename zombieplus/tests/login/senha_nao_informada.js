module.exports = {
  'Password not informed': (browser) => {
    let login = browser.page.login()
    login
      .with('zombiepotatnotregistered@potato.com', '')
      .expectAlertInfo('Oops, Cadê a senha?')
  }
}