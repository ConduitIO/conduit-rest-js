"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipelineServiceService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PipelineServiceService {
    /**
     * @param name
     * @returns v1Pipeline
     * @throws ApiError
     */
    static pipelineServiceListPipelines(name) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v1/pipelines',
            query: {
                'name': name,
            },
        });
    }
    /**
     * @param body
     * @returns v1Pipeline
     * @throws ApiError
     */
    static pipelineServiceCreatePipeline(body) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v1/pipelines',
            body: body,
        });
    }
    /**
     * @param body
     * @returns v1Pipeline
     * @throws ApiError
     */
    static pipelineServiceImportPipeline(body) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v1/pipelines/import',
            body: body,
        });
    }
    /**
     * @param id
     * @returns v1Pipeline
     * @throws ApiError
     */
    static pipelineServiceGetPipeline(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v1/pipelines/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns v1DeletePipelineResponse A successful response.
     * @throws ApiError
     */
    static pipelineServiceDeletePipeline(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/v1/pipelines/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param body
     * @returns v1Pipeline
     * @throws ApiError
     */
    static pipelineServiceUpdatePipeline(id, body) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/v1/pipelines/{id}',
            path: {
                'id': id,
            },
            body: body,
        });
    }
    /**
     * @param id
     * @returns v1Pipeline
     * @throws ApiError
     */
    static pipelineServiceExportPipeline(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v1/pipelines/{id}/export',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns v1StartPipelineResponse A successful response.
     * @throws ApiError
     */
    static pipelineServiceStartPipeline(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v1/pipelines/{id}/start',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns v1StopPipelineResponse A successful response.
     * @throws ApiError
     */
    static pipelineServiceStopPipeline(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v1/pipelines/{id}/stop',
            path: {
                'id': id,
            },
        });
    }
}
exports.PipelineServiceService = PipelineServiceService;
