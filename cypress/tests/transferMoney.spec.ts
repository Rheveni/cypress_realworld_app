import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"
import HomePage from "../pages/homePage"
import ContactPage from "../pages/contactPage"
import PaymentPage from "../pages/paymentPage"
import CompletePaymentPage from "../pages/completePaymentPage"

const Chance = require ('chance')

const loginPage = new LoginPage()
const homePage = new HomePage()
const contactPage = new ContactPage()
const paymentPage = new PaymentPage()
const chance = new Chance()
const completePaymentPage = new CompletePaymentPage()


describe('Login - Tests', () => {

    it ('Login - Success', () => {
        cy.visit('http://localhost:3000/')
        loginPage.accesssLoginPage()
        loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)
        loginPage.loginButton()
        homePage.viewHomePage()
        homePage.accessTransferPage()
        contactPage.accessContactPage()
        paymentPage.fillPayment(chance.integer({ min: 1, max: 100 }), chance.name())
        paymentPage.paymentButtonClick()
        completePaymentPage.viewSuccessAlert()
    })
})