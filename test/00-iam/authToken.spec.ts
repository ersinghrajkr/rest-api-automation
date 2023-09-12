import supertest, { SuperTest, Response, Request } from 'supertest';
import { IRequestOptions } from '../../interface-types/httpRequest.interface';
import SUPERTEST_CLIENT from '../../config/supertest.config';
import GlobalVariables from '../../config/global.variables';
import APP_CONFIG from '../../config/base.config';


describe('AUTH TOKEN ', () => {
    const globalVariablesInstance = GlobalVariables.getInstance()
    it('GET Auth Token ', async () => {
        try {
            globalThis.NEW_AUTH_TOKEN = await globalVariablesInstance.getAuthToken();
            expect(globalThis.NEW_AUTH_TOKEN).toBeDefined()
        } catch (error) {
            console.log(error)
            throw error;
        }finally{
            console.log('Finally Executed')
        }
    })
})

