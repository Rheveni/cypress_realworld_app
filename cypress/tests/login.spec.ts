import LoginPage from '../pages/loginPage'
import userData from '../fixtures/userData.json'
import HomePage from '../pages/homePage'

const loginPage = new LoginPage()
const homePage = new HomePage()


describe('Login Tests', () => {


  it('Login - Fail', () => {
    cy.visit('http://localhost:3000/')
    loginPage.accesssLoginPage()
    loginPage.loginWithUser(userData.userFail.userName, userData.userFail.password)
    loginPage.loginButtonFail()
})

  it('Login - Success', () => {
    cy.visit('http://localhost:3000/')

    loginPage.accesssLoginPage()
    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)
    loginPage.loginButton()
    homePage.viewHomePage()
    
  })
})