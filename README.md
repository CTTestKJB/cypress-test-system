# CypressTests

Interview Cypress repo

This module stores the high level logic of how the app will work. In the case of this project, the framework makes use of the **CTTestKJB/cypress-common-logic#primary-bid** library. It depends on the **primary-bid** branch of the project.

The syntax for this is Mocha. Not all the tests have been written here but it gives an overview of how mocha would work.

To get the app running, the following commands are required:

1 - npm install
2 - Run tests in headless mode: **npm run cy:local-headless:ui ENVIRONMENT=staging,USERNAME=<username>,PASSWORD=<password>,ENV_URL=<environment-base-url>**
3 - To run the test in UI, run **npm run cy:open:e2e ENVIRONMENT=staging,USERNAME=<username>,PASSWORD=<password>,ENV_URL=<environment-base-url>**

Environment=staging is another feature of the app. You can specify environment specific values in Json files and the can be picked up by the **cypress/support/index.js**. The config files are stored in the **config** folder.
