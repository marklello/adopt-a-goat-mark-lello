var AdoptAGoatConfirmationPage = function() {

    // Locators added here
    var adoptionConfirmationHeader = element(by.className('py-3 text-center'));

    // Simple validation for verifying the text on the confirmation page post-submission. This is reusable as well for
    // the future tests which need to ensure successful submission.
    this.getAdoptionConfirmationMessage = function() {
        return adoptionConfirmationHeader.getText();
    };

};
module.exports = new AdoptAGoatConfirmationPage();