// afterAll(async () => {
//     console.log("afterAll")
// });

module.exports =  async (globalConfig: any, projectConfig: any) => {
    // console.log("JEST GLOBAL",globalThis.SQL_CONN)
    
    // console.log(globalConfig.testPathPattern);
    // console.log(projectConfig.cache);
  
    // Set reference to mongod in order to close the server during teardown.
    console.log("\n afterAll **************************************************************");
}