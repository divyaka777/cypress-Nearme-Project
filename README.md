# Test-E2E-Editor-App


### Set up

Install the dependencies using [NPM](https://www.npmjs.com/)

```bash
npm install
```

### Add environment variables

Copy and rename `cypress.env.json.sample` and fill in required variables yourself.


**How to run tests:**

npx cypress open

Opens Test Runner in a browser and allows you to see commands as they execute while also viewing the application under test.

npx cypress run

Runs all tests and shows the progress and results in terminal only.

npx cypress run --spec "cypress/integration/ui-tests/test-name.spec.js"

Runs an individual test file.


npm run cypress-dashboard


Runs all tests in Cypress Dashboard and records video



### Structure


ch-test.ui
├── cypress
│   ├── fixtures - -- -- -- -- -- -- -- -- → Contains static data
│   │   └── *.json -- -- -- -- -- -- -- -- → json files containing test data
│   │
│   ├── integration - -- -- -- -- -- -- -- → Contains all e2e tests
│   │   └── ui-tests  -- -- -- -- -- -- -- → Automated UI test spec files here
│   │
│   ├── pages - -- -- -- -- -- -- -- -- -- → Contains page object model files
│   │   └── *page.ts  -- -- -- -- -- -- -- → elements and page methods are located
│   │
│   ├── plugins
│   │   └── index.js  -- -- -- -- -- -- -- → Provides access to Node process
│   │
│   ├── support
│   │   └── commands.js  -- -- -- -- -- -- → Custom commands
│   │   └── index.js  -- -- -- -- -- -- -- → A place to put global configuration and behavior that modifies Cypress
│   │
│   ├── env-config.ts -- -- -- -- -- -- -- → Configuration setup based on the tested environment URL
│   │
│   └── cypress.json  -- -- -- -- -- -- -- → Configuration setting for Cypress
│
└── ...

