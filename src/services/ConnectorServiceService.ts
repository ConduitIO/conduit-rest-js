/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { v1Connector } from '../models/v1Connector';
import type { v1ConnectorConfig } from '../models/v1ConnectorConfig';
import type { v1CreateConnectorRequest } from '../models/v1CreateConnectorRequest';
import type { v1DeleteConnectorResponse } from '../models/v1DeleteConnectorResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ConnectorServiceService {

    /**
     * @param pipelineId
     * @returns v1Connector
     * @throws ApiError
     */
    public static connectorServiceListConnectors(
        pipelineId?: string,
    ): CancelablePromise<Array<v1Connector>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/connectors',
            query: {
                'pipelineId': pipelineId,
            },
        });
    }

    /**
     * @param body
     * @returns v1Connector
     * @throws ApiError
     */
    public static connectorServiceCreateConnector(
        body: v1CreateConnectorRequest,
    ): CancelablePromise<v1Connector> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/connectors',
            body: body,
        });
    }

    /**
     * @param id
     * @returns v1Connector
     * @throws ApiError
     */
    public static connectorServiceGetConnector(
        id: string,
    ): CancelablePromise<v1Connector> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/connectors/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns v1DeleteConnectorResponse A successful response.
     * @throws ApiError
     */
    public static connectorServiceDeleteConnector(
        id: string,
    ): CancelablePromise<v1DeleteConnectorResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/connectors/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param body
     * @returns v1Connector
     * @throws ApiError
     */
    public static connectorServiceUpdateConnector(
        id: string,
        body: {
            config?: v1ConnectorConfig;
        },
    ): CancelablePromise<v1Connector> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/connectors/{id}',
            path: {
                'id': id,
            },
            body: body,
        });
    }

}