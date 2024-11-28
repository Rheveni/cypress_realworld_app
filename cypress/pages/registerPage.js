
class RegisterPage{

    selectorsList() {

        const selectors={
            signupButton: "[href='/signup']",
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            registerButton: "[type='submit']"
        }
         return selectors
    }
      
        accessSigninPage() {
            cy.visit('/signin')
        }

        accessRegisterPage() {
            cy.get(this.selectorsList().signupButton).click()
        }

        registerUser(firstName, lastName, userName, password, confirmPassword){
            cy.get(this.selectorsList().firstNameField).type(firstName)
            cy.get(this.selectorsList().lastNameField).type(lastName)
            cy.get(this.selectorsList().userNameField).type(userName)
            cy.get(this.selectorsList().passwordField).type(password)
            cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)        
        }

        confirmSignupButton(){
            cy.get(this.selectorsList().registerButton).click()
            cy.get('body').should('contain', 'Remember me')
        }
    }

    export default RegisterPage