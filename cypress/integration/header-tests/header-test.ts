
import { visitPage, clickOnHref} from 'cypress-common-logic';
import {ViewportPreset, HeaderTypes} from '../../support/types'

// const sizes: ViewportPreset[] = ['macbook-13', 'ipad-2', 'iphone-6'];

const sizes: ViewportPreset[] = ['macbook-13','ipad-2', 'iphone-6'];

const headerTypes: HeaderTypes[] = ['about-us', 'help', 'news']

context('Actions', () => {
  beforeEach(() => {
    visitPage()
  });
  //Add sizes
  sizes.forEach((size) => {
    headerTypes.forEach((type) => {
      it(`checking header type ${type} for size ${size}`, () => {
        cy.window().then((win) => {
          cy.viewport(size);
          clickOnHref(type, size)
        });
      });
    })
  });
});
