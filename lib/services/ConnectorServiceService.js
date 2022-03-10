"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectorServiceService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ConnectorServiceService {
    /**
     * @param pipelineId
     * @returns v1Connector
     * @throws ApiError
     */
    static connectorServiceListConnectors(pipelineId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static connectorServiceCreateConnector(body) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static connectorServiceGetConnector(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static connectorServiceDeleteConnector(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static connectorServiceUpdateConnector(id, body) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/v1/connectors/{id}',
            path: {
                'id': id,
            },
            body: body,
        });
    }
}
exports.ConnectorServiceService = ConnectorServiceService;
