var AdoptAGoat = function() {

    // Locators added here
    var adoptorFirstName = element(by.id('firstName'));
    var adoptorLastName = element(by.id('lastName'));
    var adoptorEmail = element(by.id('email'));
    var adoptorAddress = element(by.id('address'));
    var adoptorCountry = element(by.id('country'));
    var adoptorState = element(by.id('state'));
    var adoptorZip = element(by.id('zip'));
    var adoptNowButton = element(by.className('btn btn-primary btn-lg btn-block'));
    var requiredFieldErrorMessage = element.all(by.className('invalid-feedback'));

    // Made a reusable function which enters all required fields. If I was continue working on the TODOs then I would
    // add more functions for the optional fields as well which would be reusable.
    this.enterValidRequiredData = async function () {
        await adoptorFirstName.sendKeys('Mark');
        await adoptorLastName.sendKeys('Lello');
        await adoptorAddress.sendKeys('100 West Test Street');
        await adoptorCountry.sendKeys('United States').click();
        await adoptorState.sendKeys('Illinois').click();
        await adoptorZip.sendKeys('60654');
    };

    // I left the clicking of the adopt now button as its own function because certain tests and workflows may call
    // for data entry only for the initial verification/validation before submission. More functions could always be
    // added if the desire to have an entire workflow of data entry + submission together is needed.
    this.selectAdoptNowButton = async function () {
        await adoptNowButton.click();
    }

    this.enterInvalidEmail = async function () {
        await adoptorEmail.sendKeys('invalidEmail@');
    }

    // Since the required error messages all share the same locator className I treated this function to allow the
    // expect statements to call the errors I added in the conf.js parameter section.
    this.getValidationErrorMessage = async function () {
        return await requiredFieldErrorMessage.getText();
    }

};

module.exports = new AdoptAGoat();