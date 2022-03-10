"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessorServiceService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ProcessorServiceService {
    /**
     * @param parentIds
     * @returns v1Processor
     * @throws ApiError
     */
    static processorServiceListProcessors(parentIds) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v1/processors',
            query: {
                'parentIds': parentIds,
            },
        });
    }
    /**
     * @param body
     * @returns v1Processor
     * @throws ApiError
     */
    static processorServiceCreateProcessor(body) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v1/processors',
            body: body,
        });
    }
    /**
     * @param id
     * @returns v1Processor
     * @throws ApiError
     */
    static processorServiceGetProcessor(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v1/processors/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns v1DeleteProcessorResponse A successful response.
     * @throws ApiError
     */
    static processorServiceDeleteProcessor(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/v1/processors/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param body
     * @returns v1Processor
     * @throws ApiError
     */
    static processorServiceUpdateProcessor(id, body) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/v1/processors/{id}',
            path: {
                'id': id,
            },
            body: body,
        });
    }
}
exports.ProcessorServiceService = ProcessorServiceService;
