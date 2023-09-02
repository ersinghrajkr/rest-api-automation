import type { Config  } from 'jest';
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
      "openReport": false,
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
      "enableMergeData": true,
      "dataMergeLevel": 10
    }],
    ['jest-junit',
      {
        outputDirectory: 'reports'
      }
    ]
  ],
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
};

export default config;