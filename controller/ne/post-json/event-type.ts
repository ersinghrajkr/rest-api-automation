import GlobalVariables from "../../../config/global.variables"
const globalVariablesInstance = GlobalVariables.getInstance()
const postEventType = async () => {
    console.log("GLOBAL VARIABLES - ", globalVariablesInstance)
    globalVariablesInstance.addGlobalVariable("TEST_GLOBAL_VAR", "TEST_GLOBAL_VAR_VALUE")
    return {
        "translations": {
            "en": {
                "description": `@SHIP API-Test ${globalVariablesInstance.getUniqueNo()}`,
                "longDescription": `@SHIP API-Test ${globalVariablesInstance.getUniqueNo()}`
            }
        },
        "parameters": [],
        "comment": `@SHIP API-Test ${globalVariablesInstance.getUniqueNo()}`,
        "microservice": "notification",
        "enabled": true,
        "deleted": false,
        "topic": null,
        "triggerCondition": null,
        "graphQlQuery": null
    }
}


export default postEventType;