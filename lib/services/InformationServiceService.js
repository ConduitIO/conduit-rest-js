"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationServiceService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class InformationServiceService {
    /**
     * @returns apiv1Info
     * @throws ApiError
     */
    static informationServiceGetInfo() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/info',
        });
    }
}
exports.InformationServiceService = InformationServiceService;
