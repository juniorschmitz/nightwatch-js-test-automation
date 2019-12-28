module.exports = {
  beforeEach: (browser) => {
    browser.resizeWindow(1920, 1080)
    done()
  },
  
  afterEach: (browser) => {
    browser.end()
    done()
  }
}
