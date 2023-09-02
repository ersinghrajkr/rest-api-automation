import { IAppConfig } from "../types/appConfig.types";

export interface IRequestOptions {
    testId: string;
    baseURL: keyof IAppConfig['BASE_URL']; // Use the keys of BASE_URL
    endpoint: string;
    queryParam: string | object;
    authToken?: string;
    payload?: object;
    header?: object;
}