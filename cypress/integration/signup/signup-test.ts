

import { visitPage, goToSignupForm, validateEmailAndPassword, fullySignUp } from 'cypress-common-logic';
import {ViewportPreset} from '../../support/types'
const sizes: ViewportPreset[] = ['macbook-13','ipad-2', 'iphone-6'];

context('Actions', () => {
  beforeEach(() => {
    visitPage()
  });
  //Add sizes
  sizes.forEach((size) => {
    it(`open signup page and validate email and Password for size ${size}`, () => {
      cy.window().then((win) => {
        cy.viewport(size);
        goToSignupForm(size);
        validateEmailAndPassword();

      });
    });
  });

  sizes.forEach((size) => {
    it(`Fully signup for size ${size} ${size}`, () => {
      cy.window().then((win) => {
        cy.viewport(size);
        goToSignupForm(size);
        fullySignUp();

      });
    });
  });
});