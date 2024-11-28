import RegisterPage from '../pages/registerPage'

const Chance = require('chance')

const registerPage = new RegisterPage()
const chance = new Chance()


describe('Login Tests', () => {
    it('Register - Success', () => {
        cy.visit('http://localhost:3000/')

        registerPage.accessSigninPage()
        registerPage.accessRegisterPage()
        registerPage.registerUser('boruto', 'uzumaki', 'boruto', '123boruto', '123boruto')
        registerPage.confirmSignupButton()
    })
})
