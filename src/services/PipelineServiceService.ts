/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { v1CreatePipelineRequest } from '../models/v1CreatePipelineRequest';
import type { v1DeletePipelineResponse } from '../models/v1DeletePipelineResponse';
import type { v1Pipeline } from '../models/v1Pipeline';
import type { v1PipelineConfig } from '../models/v1PipelineConfig';
import type { v1StartPipelineResponse } from '../models/v1StartPipelineResponse';
import type { v1StopPipelineResponse } from '../models/v1StopPipelineResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PipelineServiceService {

    /**
     * @param name
     * @returns v1Pipeline
     * @throws ApiError
     */
    public static pipelineServiceListPipelines(
        name?: string,
    ): CancelablePromise<Array<v1Pipeline>> {
        return __request(OpenAPI, {
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
    public static pipelineServiceCreatePipeline(
        body: v1CreatePipelineRequest,
    ): CancelablePromise<v1Pipeline> {
        return __request(OpenAPI, {
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
    public static pipelineServiceImportPipeline(
        body: v1Pipeline,
    ): CancelablePromise<v1Pipeline> {
        return __request(OpenAPI, {
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
    public static pipelineServiceGetPipeline(
        id: string,
    ): CancelablePromise<v1Pipeline> {
        return __request(OpenAPI, {
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
    public static pipelineServiceDeletePipeline(
        id: string,
    ): CancelablePromise<v1DeletePipelineResponse> {
        return __request(OpenAPI, {
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
    public static pipelineServiceUpdatePipeline(
        id: string,
        body: {
            config?: v1PipelineConfig;
        },
    ): CancelablePromise<v1Pipeline> {
        return __request(OpenAPI, {
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
    public static pipelineServiceExportPipeline(
        id: string,
    ): CancelablePromise<v1Pipeline> {
        return __request(OpenAPI, {
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
    public static pipelineServiceStartPipeline(
        id: string,
    ): CancelablePromise<v1StartPipelineResponse> {
        return __request(OpenAPI, {
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
    public static pipelineServiceStopPipeline(
        id: string,
    ): CancelablePromise<v1StopPipelineResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/pipelines/{id}/stop',
            path: {
                'id': id,
            },
        });
    }

}