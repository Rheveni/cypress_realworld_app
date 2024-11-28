
class LoginPage{

    selectorsList(){

        const selectors ={
        usernameField:"[name='username']",
        passwordField:"[name='password']",
        rememberMeButton:"[name='remember']",
        loginButton:"[type='submit']",
        loginButtonFail:"[type='submit']",
        wrongCredentialAlert:".MuiAlert-message"
        
    }
    return selectors;
        }

        accesssLoginPage(){
            cy.visit('/signin')
        }
        
        loginWithUser(username, password){
            cy.get(this.selectorsList().usernameField).type(username)
            cy.get(this.selectorsList().passwordField).type(password)
        }

        loginButtonFail(){
            cy.get(this.selectorsList().loginButtonFail).click()
            cy.get(this.selectorsList().wrongCredentialAlert).should('be.visible')
        }

        loginButton(){
            cy.get(this.selectorsList().loginButton).click()
            
        }
    }
    export default LoginPage
