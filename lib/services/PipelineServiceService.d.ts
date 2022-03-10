import type { v1CreatePipelineRequest } from '../models/v1CreatePipelineRequest';
import type { v1DeletePipelineResponse } from '../models/v1DeletePipelineResponse';
import type { v1Pipeline } from '../models/v1Pipeline';
import type { v1PipelineConfig } from '../models/v1PipelineConfig';
import type { v1StartPipelineResponse } from '../models/v1StartPipelineResponse';
import type { v1StopPipelineResponse } from '../models/v1StopPipelineResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class PipelineServiceService {
    /**
     * @param name
     * @returns v1Pipeline
     * @throws ApiError
     */
    static pipelineServiceListPipelines(name?: string): CancelablePromise<Array<v1Pipeline>>;
    /**
     * @param body
     * @returns v1Pipeline
     * @throws ApiError
     */
    static pipelineServiceCreatePipeline(body: v1CreatePipelineRequest): CancelablePromise<v1Pipeline>;
    /**
     * @param body
     * @returns v1Pipeline
     * @throws ApiError
     */
    static pipelineServiceImportPipeline(body: v1Pipeline): CancelablePromise<v1Pipeline>;
    /**
     * @param id
     * @returns v1Pipeline
     * @throws ApiError
     */
    static pipelineServiceGetPipeline(id: string): CancelablePromise<v1Pipeline>;
    /**
     * @param id
     * @returns v1DeletePipelineResponse A successful response.
     * @throws ApiError
     */
    static pipelineServiceDeletePipeline(id: string): CancelablePromise<v1DeletePipelineResponse>;
    /**
     * @param id
     * @param body
     * @returns v1Pipeline
     * @throws ApiError
     */
    static pipelineServiceUpdatePipeline(id: string, body: {
        config?: v1PipelineConfig;
    }): CancelablePromise<v1Pipeline>;
    /**
     * @param id
     * @returns v1Pipeline
     * @throws ApiError
     */
    static pipelineServiceExportPipeline(id: string): CancelablePromise<v1Pipeline>;
    /**
     * @param id
     * @returns v1StartPipelineResponse A successful response.
     * @throws ApiError
     */
    static pipelineServiceStartPipeline(id: string): CancelablePromise<v1StartPipelineResponse>;
    /**
     * @param id
     * @returns v1StopPipelineResponse A successful response.
     * @throws ApiError
     */
    static pipelineServiceStopPipeline(id: string): CancelablePromise<v1StopPipelineResponse>;
}
