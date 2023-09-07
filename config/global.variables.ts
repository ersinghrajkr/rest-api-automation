import SUPERTEST_CLIENT from './supertest.config'
class GlobalVariables {
    private globalVariables: Record< string, number | string | Array<string | object> | object>;
    private static instance: GlobalVariables | null = null;
    private authToken: string;
  
    constructor() {
      this.globalVariables = {};
      this.authToken = '';
    }

    public static getInstance(): GlobalVariables {
        if (GlobalVariables.instance === null) {
            GlobalVariables.instance = new GlobalVariables();
        }
        return GlobalVariables.instance;
      }
  
    // Method to add a random variable with a random value
    addGlobalVariable(variableName: string, _variableValues: number | string | Array<string | object> | object ): void {
        variableName = variableName.trim()
      this.globalVariables[variableName] = _variableValues;
    }
  
    // Method to get the value of a random variable
    getGlobalVariable(variableName: string): string | Array<string | object> | object | number | undefined {
      return this.globalVariables[variableName];
    }

    async setAuthToken(email: string, password: string, envURL: string, endpoint='/iam/v1/sso/login') {
      let requestData = {testId: null, baseURL: envURL, endpoint: endpoint,  payload: {login: email, password}, queryParam: ''};
      const response = await SUPERTEST_CLIENT.post(requestData);
      this.authToken = response.body.responsePayload.access_token;
    }

    getAuthToken() {
      return this.authToken;
    }
  }
  
  // Export the class if you're working in a module-based environment
  export default GlobalVariables;