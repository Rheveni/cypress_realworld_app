class PaymentPage{
    seletorsList(){

        const selectors = {
            paymentField: "[name='amount']",
            descriptionField: "[placeholder='Add a note']",
            paymentButton: "[data-test='transaction-create-submit-payment']"
        }
        return selectors;
    }

    fillPayment(number, string){
        cy.get(this.seletorsList().paymentField).clear().type(number)
        cy.get(this.seletorsList().descriptionField).clear().type(string)
    }

    paymentButtonClick(){
        cy.get(this.seletorsList().paymentButton).click()
    }
}
export default PaymentPage