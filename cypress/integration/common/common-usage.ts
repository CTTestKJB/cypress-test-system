import { Then, And } from "cypress-cucumber-preprocessor/steps";
import {clickOnHref,goToSignupForm, validateEmailAndPassword, fullySignUp} from 'cypress-common-logic';

Then(`I navigate to {string}`, (href) => {
  clickOnHref(href);
})

Then('I navigate to signup page {string}', (size) => {
    goToSignupForm(size);
});

And('I validate email and password', (size) => {
  validateEmailAndPassword();
});

And('I validate the full signup process', (size) => {
  fullySignUp()
});