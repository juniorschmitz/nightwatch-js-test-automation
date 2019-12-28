module.exports = {
  '@disabled': true,

  'E-mail not informed': (browser) => {
    let login = browser.page.login()
    login
      .with('', 'abc123')
      .expectAlertInfo('Oops, Cadê o email?')
  }
}