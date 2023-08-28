import type { Config } from 'jest';
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: false,
  testMatch: ['**/specs/**/*.spec.{js,ts}'],
  reporters: [ //https://github.com/Hargne/jest-html-reporter/wiki/configuration
    'default',
    ["./node_modules/jest-html-reporters", {
      "pageTitle": "Otalio Test Report",
      "includeFailureMsg": true,
      "includeStackTrace": true,
      "includeConsoleLog": true,
      "includeSuiteFailure": true,
      "darkTheme": true,
      "logoImgPath": null,
      "openReport": true,
      "urlForTestFiles": "",
      "customInfos": [
        { title: "Environment", value: "QA"}, 
        {title: "Browser", value: "Chrome"}, 
        {title: "App Version", value: "1.4.14"},
        {title: "Automation Script Link", value: "some url"},
      ],
      "executionTimeWarningThreshold": 5,
      "dateFormat": "yyyy-mm-dd HH:MM:ss",
      "sort": "default", // https://github.com/Hargne/jest-html-reporter/wiki/Sorting-Methods
      "filename": "otalio-rest-api-result.html",
      "publicPath": 'reports',
    }],
    ['jest-junit',
      {
        outputDirectory: 'reports'
      }
    ],
    // ['jest-html-reporters',
    //   {
    //     publicPath: 'reports',
    //     pageTitle: "Otalio Test Report",
    //     includeFailureMsg: true,
    //     includeStackTrace: true,
    //     includeConsoleLog: true,
    //     includeSuiteFailure: true,
    //     logo: null,
    //     executionTimeWarningThreshold: 5,
    //     dateFormat: "yyyy-mm-dd HH:MM:ss",
    //     sort: "default", // https://github.com/Hargne/jest-html-reporter/wiki/Sorting-Methods
    //     outputPath: "reports/otalio-rest-api-result.html",
    //     customScriptPath: "reports"
    //   }
    // ]
  ]
};

export default config;