import APP_CONFIG from './base.config';
import SUPERTEST_CLIENT from './supertest.config'
class GlobalVariables {
  private globalVariables: Record<string, number | string | Array<string | object> | object>;
  private static instance: GlobalVariables | null = null;
  private currentTimeInMilliseconds: number;

  constructor() {
    this.globalVariables = {};
    this.currentTimeInMilliseconds = Date.now();
  }

  public static getInstance(): GlobalVariables {
    if (GlobalVariables.instance === null) {
      GlobalVariables.instance = new GlobalVariables();
    }
    return GlobalVariables.instance;
  }

  // Method to add a random variable with a random value
  addGlobalVariable(variableName: string, _variableValues: number | string | Array<string | object> | object): void {
    variableName = variableName.trim()
    this.globalVariables[variableName] = _variableValues;
  }

  // Method to get the value of a random variable
  getGlobalVariable(variableName: string): string | Array<string | object> | object | number | undefined {
    return this.globalVariables[variableName];
  }

  // async setAuthToken(email: string, password: string, envURL: string, endpoint='/iam/v1/sso/login') {
  //   let requestData = {testId: null, baseURL: envURL, endpoint: endpoint,  payload: {login: email, password}, queryParam: ''};
  //   const response = await SUPERTEST_CLIENT.post(requestData);
  //   this.authToken = response.body.responsePayload.access_token;
  //   // console.log("setAuthToken - ", this.authToken)
  // }

  async getAuthToken() {
    try {
      const authToken = await SUPERTEST_CLIENT.setAuthToken(
        APP_CONFIG.ENVIRONMENTS.SHIP2_CONFIG.EMAIL,
        APP_CONFIG.ENVIRONMENTS.SHIP2_CONFIG.PASSWORD,
        APP_CONFIG.ENVIRONMENTS.SHIP2_CONFIG.BASE_URL
      );
      return authToken;
    } catch (error) {
      throw error;
    }
  }

  getUniqueNo() {
    return this.currentTimeInMilliseconds;
  }
}

// Export the class if you're working in a module-based environment
export default GlobalVariables;