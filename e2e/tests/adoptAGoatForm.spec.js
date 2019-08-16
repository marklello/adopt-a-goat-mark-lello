// adoptAGoatForm.spec.js
var adoptAGoatForm = require('../pageObjects/adoptAGoatForm.po');
var adoptAGoatConfirmationPage = require('../pageObjects/adoptAGoatConfirmationPage.po');

var errorValidationMessages = [
    'Valid first name is required.',
    'Valid last name is required.',
    'Please enter a valid email address for adoption updates.',
    'Please enter your home address.',
    'Please select a valid country.',
    'Please provide a valid state.',
    'Zip code required.',
];

describe('Adopt A Goat', function() {
    // Using the beforeEach function because we would want to make our suite's tests independent of each other.
    // NOTE: Each test I have created can be ran independently. This is preferred so we can not rely heavily on chaining
    // tests and workflows together. Additionally, when tests can be ran independently we can debug issues much faster.
    beforeEach(async () => {
        // add your local file location below to run this suite
        browser.get('file:///Users/marklello/WebstormProjects/adopt-a-goat-marklello/index.html');
    });

    // NOTE: Independent test which uses page objects functions which are reusable and makes reading through the it
    // block and spec itself much easier.
    it('should successfully confirm adoption upon submission of required fields', function() {
        adoptAGoatForm.enterValidRequiredData();
        // I noticed the adopt now button wasn't always clickable without a small 1 second wait. The below browser.sleep
        // function is not a best practice because we would not want to add too many wait times to the suite. However,
        // If I were to have the time to refactor this I would replace it with something like the following to make the
        // wait conditional:
            // var EC = protractor.ExpectedConditions;
            // Waits for the element with locator 'adoptAGoatForm.adoptNowButton' to be visible on the dom.
            // browser.wait(EC.visibilityOf(adoptAGoatForm.adoptNowButton), 5000);
        browser.sleep(1000);
        adoptAGoatForm.selectAdoptNowButton();
        expect(adoptAGoatConfirmationPage.getAdoptionConfirmationMessage('Adoption Request Accepted!'))
    });

    // NOTE: Independent test which uses page objects functions which are reusable and makes reading through the it
    // block and spec itself much easier.
    // NOTE: This test's expect statement verifies each error validation message by calling the array of all page level
    // error messages simultaneously and validating them against the error definitions of the var
    // errorValidationMessages included within this spec file.
    it('should throw validation error messages upon submitting the form without required field data', function() {
        adoptAGoatForm.enterInvalidEmail();
        // Added the invalid email scenario because it is an optional field and would not have been triggered otherwise.
        // The purpose of this test was to verify all page level validations at once.
        adoptAGoatForm.selectAdoptNowButton();
        expect(adoptAGoatForm.getValidationErrorMessage()).toEqual(errorValidationMessages);
    });

    // TODO: it('should remove inline required error validation messages upon inputs being entered into each field')

    // TODO: it('should successfully submit when all fields (required and optional) are correctly entered')

    // TODO: it('should successfully display and function at a responsive mobile window size')

    // TODO: it('should successfully display and function at a responsive tablet/desktop window size')

    // TODO: it('should throw validation errors for minimum character lengths on inputs')

    // TODO: it('should throw validation errors for minimum character lengths on inputs')

    // TODO: it('should throw validation errors for maximum character lengths on inputs')

    // TODO: it('should allow max length for optional comment, and comment box can be expanded to view entire comment')

    // TODO: it('should display all assets such as logos, headers, copyright information correctly')

    // TODO: it('should prevent user from deep linking straight to the confirmation page')

    // TODO: it('should allow expected navigation for back, forward, and refresh scenarios')

    // TODO: it('should display all assets on the confirmation page as expected')

    // TODO: it('should take user to the privacy information page upon clicking the privacy link')

    // TODO: it('should take user to the terms information page upon clicking the terms link')

    // TODO: it('should take user to the support information page upon clicking the support link')

    // TODO: it('should successfully submit with non-default adoption detail "LogicGate"')

    // TODO: it('should successfully submit with non-default adoption detail "I just love goats!"')

    // TODO: it('should successfully submit with non-default adoption detail "I'm so lonely with no goat"')

});


