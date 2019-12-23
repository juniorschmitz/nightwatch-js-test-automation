module.exports = {
  'Sucessful Login': (browser) => {
    let login = browser.page.login()
    let sidebar = browser.page.sidebar()

    browser.resizeWindow(1920, 1080)
    
    login
      .with('zombiepotato@potato.com', 'pwd123')

    sidebar
      .waitForElementVisible('@userInfo', 3000)
      .assert.containsText('@userInfo', 'ZombiePotato')
      .end();
  }
}