import { IAppConfig } from "../types/appConfig.types";

const config: IAppConfig = {
  BASE_URL: { 
    HQ: 'https://shore-qa.otaliodev.com', 
    SHIP1: 'https://ship1-qa.otaliodev.com', 
    SHIP2: 'https://ship2-qa.otaliodev.com'
  },
  ENV: {
    HQ: {
      email: '',
      password: '',
      baseURL: 'https://shore-qa.otaliodev.com', 
    },
    SHIP1: {
      email: '',
      password: '',
      baseURL: 'https://ship1-qa.otaliodev.com', 
    },
    SHIP2: {
      email: '',
      password: '',
      baseURL: 'https://ship2-qa.otaliodev.com'
    }
  }
};

export default config;
