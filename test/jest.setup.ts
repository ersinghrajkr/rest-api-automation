import GlobalVariables from "../config/global.variables";

module.exports =  async(globalConfig: any, projectConfig: any) => {
    console.log("\n beforeAll **************************************************************")
    const globalVariablesInstance = GlobalVariables.getInstance();
    globalThis.SQL_CONN = "SQL Connection";
    globalThis.UNIX_TIME = Date.now();
    globalThis.AUTH_TOKEN = await globalVariablesInstance.getAuthToken();
    // console.log("AUTH TOKEN - ", GlobalVariables.getAuthToken())
    globalVariablesInstance.addGlobalVariable("Raj", "RAJ KUMAR");
    // console.log("INSTANCE OF GlobalVariables SETUP - ",globalVariablesInstance)
}