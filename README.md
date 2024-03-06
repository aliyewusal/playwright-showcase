# Playwright Automation

This repository contains automated tests for showcasing the abilities of Playwright.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).
- **Git Bash**: Ensure Git is installed on your machine. You can download it from [https://git-scm.com/](https://git-scm.com/).

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aliyewusal/playwright-showcase.git

2. **Install NPM packages** 

    ```bash     
    npm install

3. **Install Playwright**

    ```bash     
    npx playwright install

## How to run
In real project you can limit commands to align with requirements. Additional command are described for presentation purposes.

***Note:*** It is recommended running your tests with UI Mode for a better developer experience.

Please review below table to see example run commands:

| Command                                | Description                                                                                                            |
|----------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| npx playwright test                    | This will run your tests on all browsers as configured in the `playwright.config` file.                                |
| npx playwright test --ui               | This will launch UI Mode you will see a list of all your test files. You can run all your tests.                       |
| npx playwright test --headed           | This will give you the ability to visually see how Playwright interacts with the website.                              |
| npx playwright test --project chromium | This will specify which browser you would like to run your tests on, which configured in the `playwright.config` file. |
| npx playwright test example.spec.ts    | This will run a single test file                                                                                       |
| npx playwright test landing login      | This will run files that have landing or login in the file name.                                                       |
| npx playwright test --grep="@visual"   | This will run tests which includes `@visual` tag in its name.                                                          |


## How to see the HTML report of the run ###

* Using command below (all tests will run in headless mode)
   ```bash 
   npx playwright show-report
   ```

### Project structure
This project use structure of directories and files:
* `.\tests` - This directory contains all the test files
* `.\pages` - This directory contains all the page objects
* `.\components` - This directory contains all the components which are common for all pages or components that are not the part of page
* `.\fixtures` - This directory contains playwright fixtures (in our case for parameterization)
* `.\visual` - This directory contains snapshots to be used in visualComparison tests
* `.\playwright-report` - This directory comes default with playwright and includes report files
* `.\test-results` - This directory comes default with playwright and includes test result files: trace, video, screenshot (in our case only on failure)
* `.\tests\global.setup.ts` - This file is making login and saving cookies to later inject to other tests
* `.\playwright\.auth\user.json` - This file is saves authenticated browser state

**Note:** 
- Currently, tests will run on only one project `chromium`, if you wish to run in different browser,
you could go to `playwright.config.ts`file and add project/browser of your need (it might cause to fail viusal test , you should change golden file in this case).
