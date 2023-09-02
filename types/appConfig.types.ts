
export interface IAppConfig {
  BASE_URL: { HQ: string, SHIP1: string, SHIP2: string };

  ENV: {
    HQ: {
      email: string;
      password: string;
      baseURL: string;
    },
    SHIP1: {
      email: string;
      password: string;
      baseURL: string;
    },
    SHIP2: {
      email: string;
      password: string;
      baseURL: string;
    }
  }
}