import mysql, { ConnectionOptions } from 'mysql2/promise';

class MYSQL_DB_CONNECTION {

  private static instance: MYSQL_DB_CONNECTION | null = null;
  constructor() {}

  public static getInstance(): MYSQL_DB_CONNECTION {
    if (MYSQL_DB_CONNECTION.instance === null) {
      MYSQL_DB_CONNECTION.instance = new MYSQL_DB_CONNECTION();
    }
    return MYSQL_DB_CONNECTION.instance;
  }


  getConfig(): ConnectionOptions {
    return {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'singhrajkr',
      database: 'sms',
      // multipleStatements: true,
      // connectTimeout: 15,
      // stringifyObjects: false,
      // dateStrings: ['TIMESTAMP', 'DATETIME', 'DATE'],
      // rowsAsArray: false,
      // isServer: false
    }
  }

  async getConnection(){
    try {
      let config: ConnectionOptions = this.getConfig()
      // console.log('CONFIG DETAILS: ', config)
      return await mysql.createConnection(config);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}

export default MYSQL_DB_CONNECTION