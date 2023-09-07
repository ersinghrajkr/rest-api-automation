require('dotenv').config();
import oracledb, { Connection } from 'oracledb';
// oracledb.outFormat = oracledb.OUT_FORMAT_ARRAY;
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;



function getConnectionDetails(env: string) {
    const DB_CONFIG = { USERNAME: '', PASSWORD: '', HOST: '167.99.74.83', PORT: '1521', SID: 'RTDEV' }
    // console.log('Provided Env: ', env)
    if (env === 'QA') {
            DB_CONFIG.USERNAME = 'RES_TRANS_QA',
            DB_CONFIG.PASSWORD = 'RES_TRANS_QA'
    } else if (env === 'QA2') {
            DB_CONFIG.USERNAME = 'RES_TRANS_REL',
            DB_CONFIG.PASSWORD = 'RES_TRANS_REL'
    } else if (env === 'QA-INIT') {
            DB_CONFIG.USERNAME = 'RESTQA_INIT',
            DB_CONFIG.PASSWORD = 'RESTQA_INIT'
    } else if (env === 'STAGE') {
            DB_CONFIG.USERNAME = 'RES_TRANS_STG',
            DB_CONFIG.PASSWORD = 'RES_TRANS_STG'
    } else if (env === 'PERFORMANCE') {
            DB_CONFIG.USERNAME = 'RES_TRANS_PERF',
            DB_CONFIG.PASSWORD = 'RES_TRANS'
    } else if (env === 'DEV') {
            // DEV ENV
            DB_CONFIG.USERNAME = 'RES_TRANS',
            DB_CONFIG.PASSWORD = 'RES_TRANS'
    } else {
        throw new Error('Please provide valid RES_TRANS environment.')
    }
    return DB_CONFIG;
}


class ORACLE_DB_CONNECTION {
    private static instance: ORACLE_DB_CONNECTION | null = null;
    constructor() {}

    public static getInstance(): ORACLE_DB_CONNECTION {
        if (ORACLE_DB_CONNECTION.instance === null) {
            ORACLE_DB_CONNECTION.instance = new ORACLE_DB_CONNECTION();
        }
        return ORACLE_DB_CONNECTION.instance;
      }
     async getConnection(RES_TRANS_ENV: string): Promise<Connection> {
        try {
            const CONFIG = getConnectionDetails(RES_TRANS_ENV);
            // console.log('CONFIG DETAILS: ', CONFIG)
            return await oracledb.getConnection({
                user: CONFIG.USERNAME, password: CONFIG.PASSWORD,
                connectionString: `${CONFIG.HOST}:${CONFIG.PORT}/${CONFIG.SID}`
            })
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default ORACLE_DB_CONNECTION;

