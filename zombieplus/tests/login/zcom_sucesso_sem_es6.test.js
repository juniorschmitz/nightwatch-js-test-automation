module.exports = {
  '@disabled': true,
  'Sucessful Login': function(browser) {
    var userInfo = '.user .info span'

    browser
      .resizeWindow(1920, 1080)
      .url('http://zombie-web:5000/login')
      .waitForElementVisible('.card-login', 3000)
      .setValue('input[name="email"]', 'zombiepotato@potato.com')
      .setValue('input[name="password"]', 'pwd123')
      .click('.login-button')
      .waitForElementVisible(userInfo, 3000)
      .assert.containsText(userInfo, 'ZombiePotato')
      .end();
  }
  // 'dado que eu acesso a página de login': function (browser) {
  //     browser
  //         .resizeWindow(1920, 1080)
  //         .url('http://zombie-web:5000/login')
  //         .waitForElementVisible('.card-login', 3000)
  // },
  // 'quando eu faço login com sucesso': function (browser) {
  //   browser
  //     .setValue('input[name="email"]', 'zombiepotato@potato.com')
  //     .setValue('input[name="password"]', 'pwd123')
  //     .click('.login-button')
  // },
  // 'então devo ver o meu nome na área logada': function (browser) {
  //   var userInfo = '.user .info span'
  //   browser
  //       .waitForElementVisible(userInfo, 3000)
  //       .assert.containsText(userInfo, 'ZombiePotato')
  //       .end();
  // }
}