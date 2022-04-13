import { Given } from "cypress-cucumber-preprocessor/steps";
import {visitPage} from 'cypress-common-logic';

Given('I open PrimaryBid page', () => {
  visitPage();
});