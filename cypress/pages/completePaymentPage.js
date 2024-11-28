class CompletePaymentPage{
    selectorsList(){
        const selectors={
            successAlert: '[data-test="alert-bar-success"]'
        }
        return selectors;
    }
    
    viewSuccessAlert(){
        cy.get(this.selectorsList().successAlert).should('be.visible');
    }
}
export default CompletePaymentPage 