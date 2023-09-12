import APP_CONFIG from '../../config/base.config'
import SUPERTEST_CLIENT from '../../config/supertest.config'
import postEventType from './post-json/event-type'
import GlobalVariables from "../../config/global.variables"
class EventTypeController {
    // public globalVariables = GlobalVariables.getInstance()
    public shipURL = APP_CONFIG.ENVIRONMENTS.SHIP2_CONFIG.BASE_URL;
    public globalVariablesInstance = GlobalVariables.getInstance()
    async create() {
        try {
            // console.log("EventTypeController getAuthToken- ", this.globalVariablesInstance.getAuthToken())
            console.log("EventTypeController getAuthToken- ",await postEventType())
            console.log("GLOBAL VARIABLES - ", this.globalVariablesInstance)
            const res = await SUPERTEST_CLIENT.post({
                baseURL: this.shipURL,
                endpoint: '/notification/v1/event-types',
                payload: await postEventType(),
                authToken: await this.globalVariablesInstance.getAuthToken()
            });
            console.log("EventTypeController- ", res.body)
            return res;
        } catch (error) {
            console.log("Error-", error.message)
            throw error;
        }
    }
}

export default EventTypeController;