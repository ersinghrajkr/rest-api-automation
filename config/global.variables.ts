class GlobalVariables {
    private globalVariables: Record< string, number | string | Array<string | object> | object>;
    private static instance: GlobalVariables | null = null;
  
    constructor() {
      this.globalVariables = {};
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
  }
  
  // Export the class if you're working in a module-based environment
  export default GlobalVariables;