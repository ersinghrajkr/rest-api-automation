import { IAppConfig } from "../interface-types/appConfig.interface";

const APP_CONFIG: IAppConfig = {
  ENVIRONMENTS: {
    HQ_CONFIG: {
      EMAIL: '',
      PASSWORD: '',
      HIERARCHY_ID: '',
      BASE_URL: 'https://shore-qa.otaliodev.com',
      DB_USERNAME: '',
      DB_PASSWORD: '',
      DB_HOST: '',
      DB_PORT: 3306, 
    },
    SHIP1_CONFIG: {
      EMAIL: '',
      PASSWORD: '',
      HIERARCHY_ID: '64f91ae289ab11e8be3dfa2819c4da71',
      BASE_URL: 'https://ship1-qa.otaliodev.com',
      DB_USERNAME: '',
      DB_PASSWORD: '',
      DB_HOST: '',
      DB_PORT: 3306, 
    },
    SHIP2_CONFIG: {
      EMAIL: 'admin2@otalio.com',
      PASSWORD: 'ABCD123',
      HIERARCHY_ID: '8dcc009689ab11e8be3dfa2819c4da71',
      BASE_URL: 'https://ship2-qa.otaliodev.com',
      DB_USERNAME: '',
      DB_PASSWORD: '',
      DB_HOST: '',
      DB_PORT: 3306, 
      }
  }
};

export default APP_CONFIG;
