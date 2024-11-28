class ContactPage{

    selectorsList(){

        const selectors ={
            contactTransferMoneyButton: "[data-test='user-list-item-GjWovtg2hr']"
        } 
         return selectors
    }
    accessContactPage(){
        cy.get(this.selectorsList().contactTransferMoneyButton).click({force:true})
    }

}
export default ContactPage