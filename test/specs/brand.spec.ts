import supertest, { SuperTest, Response, Request } from 'supertest';
import { IRequestOptions } from '../../types/httpRequest.types';
const request = supertest('https://sdetunicorns.com/api/test')
import MYSQL_DB_CONNECTION from '../../config/mysqldb.config';
import ORACLE_DB_CONNECTION from '../../config/oracledb.config';
import SUPERTEST_CLIENT from '../../config/supertest.config';
import GlobalVariables from '../../config/global.variables';

const requestOptions: IRequestOptions = {
    testId: '123',
    baseURL: 'HQ', // This should be one of the keys in BASE_URL
    endpoint: '/metadata/v1/ships/8dcc009689ab11e8be3dfa2819c4da71',
    queryParam: { }
  };

  const requestOptionsSHIP: IRequestOptions = {
    testId: '123',
    baseURL: 'SHIP2', // This should be one of the keys in BASE_URL
    endpoint: '/metadata/v1/ships/8dcc009689ab11e8be3dfa2819c4da71',
    queryParam: { }
  };


describe('BRAND Tests', () => {
    it('GET /brands', async () => {
        const res = await request.get('/brands');
        
        // console.log('GET BRAND Tests', Object.keys(res.body[0]));
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThanOrEqual(1)
        expect(Object.keys(res.body[0])).toEqual(['_id', 'name'])
    })

    it('GET /brands with query params', async () => {
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
            const requestResponseSHIP2 = await SUPERTEST_CLIENT.get(requestOptions);
            console.log('Response Body: ',  requestResponseSHIP2);
            globalVar.addGlobalVariable('GET_RES', requestResponseSHIP2.body);
            console.log('Testing Global Variables: ', globalVar.getGlobalVariable('GET_RES'))
            console.log('Testing Global Variables Class: ', globalVar)
            // expect(requestResponseSHIP2.statusCode).toEqual(200)
            // expect(requestResponseSHIP2.unauthorized).toEqual(401)
            // expect(requestResponseSHIP2.status).toEqual('Authorization Required')
        } catch (error) {
            console.log(error)
            throw error;
        }finally{
            await sqlCon?.destroy();
            await oracleCon?.close();
        }
    })
})

