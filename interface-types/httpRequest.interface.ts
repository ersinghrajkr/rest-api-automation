import { IAppConfig } from "./appConfig.interface";

export interface IRequestOptions {
    testId?: string | null;
    baseURL: string;
    // baseURL: keyof IAppConfig["ENVIRONMENTS"]["HQ_CONFIG"]["BASE_URL"] 
    // | keyof IAppConfig["ENVIRONMENTS"]["SHIP1_CONFIG"]["BASE_URL"] 
    // | keyof IAppConfig["ENVIRONMENTS"]["SHIP2_CONFIG"]["BASE_URL"];
    endpoint: string;
    queryParam?: string | object;
    authToken?: string;
    payload?: object;
    header?: object;
}