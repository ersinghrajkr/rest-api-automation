import GlobalVariables from '../../config/global.variables';
import EventTypeController from '../../controller/ne/event-type.controller';

describe('Notification Event Type', () => {
    let globalVariablesInstance: GlobalVariables;
    let eventTypeController: EventTypeController
    beforeAll(() => {
        globalVariablesInstance = GlobalVariables.getInstance();
        eventTypeController = new EventTypeController();
    })

    it('POST - Event Type', async () => {
        console.log("\n Notification Event Type JEST GLOBAL SQL_CONN", globalThis.SQL_CONN)
        console.log("\n Notification Event Type JEST GLOBAL AUTH_TOKEN", globalThis.AUTH_TOKEN)
        console.log("\n Notification Event Type TEST_GLOBAL_VAR", globalVariablesInstance.getGlobalVariable("TEST_GLOBAL_VAR"))
        // console.log("getAuthToken Notification Event Type JEST GLOBAL", await globalVariablesInstance.getAuthToken())
        try {
            let eventypeRes = await eventTypeController.create();
            expect(eventypeRes.statusCode).toBe(201);
        } catch (error) {
            console.log(error)
            throw error;
        }finally{
            console.log('Finally Executed')
            console.log("NEW AUTH TOKEN VALUE: ", globalThis.NEW_AUTH_TOKEN)
        }
    }, 10000)
})
