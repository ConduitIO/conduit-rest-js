/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { v1CreateProcessorRequest } from '../models/v1CreateProcessorRequest';
import type { v1DeleteProcessorResponse } from '../models/v1DeleteProcessorResponse';
import type { v1Processor } from '../models/v1Processor';
import type { v1ProcessorConfig } from '../models/v1ProcessorConfig';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProcessorServiceService {

    /**
     * @param parentIds
     * @returns v1Processor
     * @throws ApiError
     */
    public static processorServiceListProcessors(
        parentIds?: Array<string>,
    ): CancelablePromise<Array<v1Processor>> {
        return __request(OpenAPI, {
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
    public static processorServiceCreateProcessor(
        body: v1CreateProcessorRequest,
    ): CancelablePromise<v1Processor> {
        return __request(OpenAPI, {
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
    public static processorServiceGetProcessor(
        id: string,
    ): CancelablePromise<v1Processor> {
        return __request(OpenAPI, {
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
    public static processorServiceDeleteProcessor(
        id: string,
    ): CancelablePromise<v1DeleteProcessorResponse> {
        return __request(OpenAPI, {
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
    public static processorServiceUpdateProcessor(
        id: string,
        body: {
            config?: v1ProcessorConfig;
        },
    ): CancelablePromise<v1Processor> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/processors/{id}',
            path: {
                'id': id,
            },
            body: body,
        });
    }

}