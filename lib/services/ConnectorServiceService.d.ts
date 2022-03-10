import type { v1Connector } from '../models/v1Connector';
import type { v1ConnectorConfig } from '../models/v1ConnectorConfig';
import type { v1CreateConnectorRequest } from '../models/v1CreateConnectorRequest';
import type { v1DeleteConnectorResponse } from '../models/v1DeleteConnectorResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ConnectorServiceService {
    /**
     * @param pipelineId
     * @returns v1Connector
     * @throws ApiError
     */
    static connectorServiceListConnectors(pipelineId?: string): CancelablePromise<Array<v1Connector>>;
    /**
     * @param body
     * @returns v1Connector
     * @throws ApiError
     */
    static connectorServiceCreateConnector(body: v1CreateConnectorRequest): CancelablePromise<v1Connector>;
    /**
     * @param id
     * @returns v1Connector
     * @throws ApiError
     */
    static connectorServiceGetConnector(id: string): CancelablePromise<v1Connector>;
    /**
     * @param id
     * @returns v1DeleteConnectorResponse A successful response.
     * @throws ApiError
     */
    static connectorServiceDeleteConnector(id: string): CancelablePromise<v1DeleteConnectorResponse>;
    /**
     * @param id
     * @param body
     * @returns v1Connector
     * @throws ApiError
     */
    static connectorServiceUpdateConnector(id: string, body: {
        config?: v1ConnectorConfig;
    }): CancelablePromise<v1Connector>;
}
