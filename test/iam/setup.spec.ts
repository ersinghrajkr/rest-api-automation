import supertest, { SuperTest, Response, Request } from 'supertest';
import { IRequestOptions } from '../../interface-types/httpRequest.interface';
import MYSQL_DB_CONNECTION from '../../config/mysqldb.config';
import ORACLE_DB_CONNECTION from '../../config/oracledb.config';
import SUPERTEST_CLIENT from '../../config/supertest.config';
import GlobalVariables from '../../config/global.variables';
import APP_CONFIG from '../../config/base.config';


const requestOptions: IRequestOptions = {
    testId: '123',
    baseURL: APP_CONFIG.ENVIRONMENTS.HQ_CONFIG.BASE_URL,
    endpoint: '/metadata/v1/ships/8dcc009689ab11e8be3dfa2819c4da71',
    queryParam: { }
  };

  const requestOptionsSHIP: IRequestOptions = {
    testId: '123',
    baseURL: APP_CONFIG.ENVIRONMENTS.SHIP2_CONFIG.BASE_URL, // This should be one of the keys in BASE_URL
    endpoint: '/metadata/v1/ships/8dcc009689ab11e8be3dfa2819c4da71',
    queryParam: { }
  };


describe('Setup TEST', () => {

    it('GET POST SQL Connection Test', async () => {
        let globalVar = GlobalVariables.getInstance()
        let sqlCon: any, oracleCon: any
        try {
            let mysqlConInstance = MYSQL_DB_CONNECTION.getInstance()
            sqlCon = await mysqlConInstance.getConnection();
            let oracleConInstance = ORACLE_DB_CONNECTION.getInstance()
            oracleCon = await oracleConInstance.getConnection('QA')
            // console.log('oracleCon currentSchema -',oracleCon?.currentSchema);
            // const [rows, fields] = await sqlCon?.execute(`Select * from user;`);
            // const results = await oracleCon?.execute(`SELECT * FROM guest_profile WHERE last_name like 'ARNOLD150%'`);
            // const requestResponse = await SUPERTEST_CLIENT.GET_HQ(requestOptions);
            // console.log('MYSQL_DB_CONNECTION - ', rows, '\n TABLE FIELDS: ', fields);
            // console.log('ORACLE_DB_CONNECTION -', results.rows,'\n TABLE FIELDS: ', results.metaData);
            // console.log('SUPERTEST_CLIENT- HQ ', requestResponse.body);
            await globalVar.setAuthToken(APP_CONFIG.ENVIRONMENTS.SHIP2_CONFIG.EMAIL, APP_CONFIG.ENVIRONMENTS.SHIP2_CONFIG.PASSWORD, APP_CONFIG.ENVIRONMENTS.SHIP2_CONFIG.BASE_URL);
            requestOptionsSHIP.authToken = globalVar.getAuthToken()
            const requestResponseSHIP2 = await SUPERTEST_CLIENT.get(requestOptionsSHIP);
            console.log('Response Body: ',  requestResponseSHIP2.body);
        } catch (error) {
            console.log(error)
            throw error;
        }finally{
            await sqlCon?.destroy();
            await oracleCon?.close();
            console.log('Finally Executed')
        }
    })
})

