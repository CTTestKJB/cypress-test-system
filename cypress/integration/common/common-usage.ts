import { Then } from "cypress-cucumber-preprocessor/steps";
import {clickOnHref} from 'cypress-common-logic';

Then(`I navigate to {string}`, (href) => {
  clickOnHref(href);
})
