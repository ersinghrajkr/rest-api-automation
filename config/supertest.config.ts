import supertest, { SuperTest, Test } from 'supertest';
import * as logNetworkTime from 'superagent-node-http-timings';
import CONFIG from './base.config'
import { IRequestOptions } from '../interface-types/httpRequest.interface';
import InvalidRequestError from '../utils/errorHandling/invalidrequest.exception'


class SUPERTEST_CLIENT {
    async get(options: IRequestOptions): Promise<supertest.Response> {
        const { endpoint, queryParam, authToken, header, baseURL } = options;
        // const baseURL = CONFIG.BASE_URL[options.baseURL];
        // console.log(baseURL, endpoint, queryParam, authToken, payload, header)
        if (!baseURL || !endpoint) {
            throw new InvalidRequestError(`Given Base URL & Endpoint: ${baseURL}${endpoint} is not valid`);
        }
        try {
            let requestHQ = supertest(baseURL.trim());
            const getResponse = await requestHQ.get(options.endpoint.trim())
                .query(queryParam ? queryParam : '')
                .auth(authToken && typeof authToken === 'string' && authToken !== '' ? authToken : '', { type: "bearer" })
                .set("Accept", typeof header === 'object' && Object.keys(header).length > 0 ? `${options.header}` : `application/json`);
            // console.log('hqGetResponse -', hqGetResponse.statusCode, hqGetResponse.unauthorized)
            return getResponse;
        } catch (error) {
            error.message = `Error while making a GET call to ${baseURL}${endpoint}, ${error}`;
            throw error;
        }
    }


    async post(options: IRequestOptions) {
        const { endpoint, authToken, payload, header, baseURL } = options;
        console.log('post RequestOptions :', options)
        if (!baseURL || !endpoint) {
            throw new InvalidRequestError(`Given Base URL & Endpoint: ${baseURL}${endpoint} is not valid`);
        }
        try {
            let requestHQ = supertest(baseURL.trim());
            const postResponse = await requestHQ.post(options.endpoint.trim())
                .send(payload)
                .auth(authToken && typeof authToken === 'string' && authToken !== '' ? authToken : '', { type: "bearer" })
                .set(header? header: {"Content-Type" : "application/json", "Accept": "*/*", "Accept-Encoding": "gzip, deflate, br", "Connection": "keep-alive"});
            return postResponse;
        } catch (error) {
            error.message = `Error while making a POST call to ${baseURL}${endpoint}, ${error}`;
            throw error;
        }
    }

    async put(options: IRequestOptions) {
        const { endpoint, authToken, payload, header, baseURL } = options;
        // const baseURL = CONFIG.BASE_URL[options.baseURL];
        if (!baseURL || !endpoint) {
            throw new InvalidRequestError(`Given Base URL & Endpoint: ${baseURL}${endpoint} is not valid`);
        }
        try {
            let requestHQ = supertest(baseURL.trim());
            const putResponse = requestHQ.put(options.endpoint.trim())
                .send(payload)
                .auth(authToken && typeof authToken === 'string' && authToken !== '' ? authToken : '', { type: "bearer" })
                .set("Accept", typeof header === 'object' && Object.keys(header).length > 0 ? `${options.header}` : `application/json`);
            return putResponse;
        } catch (error) {
            error.message = `Error while making a PUT call to ${baseURL}${endpoint}, ${error}`;
            throw error;
        }
    }

    async patch(options: IRequestOptions) {
        const { endpoint, authToken, payload, header, baseURL } = options;
        // const baseURL = CONFIG.BASE_URL[options.baseURL];
        if (!baseURL || !endpoint) {
            throw new InvalidRequestError(`Given Base URL & Endpoint: ${baseURL}${endpoint} is not valid`);
        }
        try {
            let requestHQ = supertest(baseURL.trim());
            const postResponse = await requestHQ.patch(options.endpoint.trim())
                .send(payload)
                .auth(authToken && typeof authToken === 'string' && authToken !== '' ? authToken : '', { type: "bearer" })
                .set("Accept", typeof header === 'object' && Object.keys(header).length > 0 ? `${options.header}` : `application/json`);
            return postResponse;
        } catch (error) {
            error.message = `Error while making a POST call to ${baseURL}${endpoint}, ${error}`;
            throw error;
        }
    }

    async delete(options: IRequestOptions): Promise<supertest.Response> {
        const { endpoint, queryParam, authToken, header, baseURL } = options;
        // const baseURL = CONFIG.BASE_URL[options.baseURL];
        // console.log(baseURL, endpoint, queryParam, authToken, payload, header)
        if (!baseURL || !endpoint) {
            throw Error(`Given Base URL & Endpoint: ${baseURL}${endpoint} is not valid`);
        }
        try {
            let requestHQ = supertest(baseURL.trim());
            const getResponse = await requestHQ.delete(options.endpoint.trim())
                .query(queryParam ? queryParam : '')
                .auth(authToken && typeof authToken === 'string' && authToken !== '' ? authToken : '', { type: "bearer" })
                .set("Accept", typeof header === 'object' && Object.keys(header).length > 0 ? `${options.header}` : `application/json`);
            // console.log('hqGetResponse -', hqGetResponse.statusCode, hqGetResponse.unauthorized)
            return getResponse;
        } catch (error) {
            error.message = `Error while making a GET call to ${baseURL}${endpoint}, ${error}`;
            throw error;
        }
    }


}

export default new SUPERTEST_CLIENT();