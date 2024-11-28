class HomePage{

    selectorsList(){

        const selectors={
            everyoneGrid:"[data-test='nav-public-tab']",
            transferMoneyButton: "[href='/transaction/new']",    
        }
        return selectors
    }

    viewHomePage(){
        cy.get(this.selectorsList().everyoneGrid).should('be.visible')
    }

    accessTransferPage(){
        cy.get(this.selectorsList().transferMoneyButton).click()
    }
}
export default HomePage