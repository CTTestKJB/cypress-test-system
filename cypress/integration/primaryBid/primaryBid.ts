import { Given } from "cypress-cucumber-preprocessor/steps";
import {visitPage} from 'cypress-common-logic';

Given('I open PrimaryBid page with screen type {string}', (screenType, pageType) => {

  cy.window().then((win) => {
    cy.viewport(screenType);
      visitPage();
  })
});

