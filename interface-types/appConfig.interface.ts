
export interface IAppConfig {
  ENVIRONMENTS: {
    HQ_CONFIG: ConfigProperties,
    SHIP1_CONFIG: ConfigProperties,
    SHIP2_CONFIG: ConfigProperties
  }
}

interface ConfigProperties {
  EMAIL: string;
  PASSWORD: string;
  HIERARCHY_ID: string;
  BASE_URL: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_PORT: number;
}