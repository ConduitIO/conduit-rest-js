import type { v1CreateProcessorRequest } from '../models/v1CreateProcessorRequest';
import type { v1DeleteProcessorResponse } from '../models/v1DeleteProcessorResponse';
import type { v1Processor } from '../models/v1Processor';
import type { v1ProcessorConfig } from '../models/v1ProcessorConfig';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ProcessorServiceService {
    /**
     * @param parentIds
     * @returns v1Processor
     * @throws ApiError
     */
    static processorServiceListProcessors(parentIds?: Array<string>): CancelablePromise<Array<v1Processor>>;
    /**
     * @param body
     * @returns v1Processor
     * @throws ApiError
     */
    static processorServiceCreateProcessor(body: v1CreateProcessorRequest): CancelablePromise<v1Processor>;
    /**
     * @param id
     * @returns v1Processor
     * @throws ApiError
     */
    static processorServiceGetProcessor(id: string): CancelablePromise<v1Processor>;
    /**
     * @param id
     * @returns v1DeleteProcessorResponse A successful response.
     * @throws ApiError
     */
    static processorServiceDeleteProcessor(id: string): CancelablePromise<v1DeleteProcessorResponse>;
    /**
     * @param id
     * @param body
     * @returns v1Processor
     * @throws ApiError
     */
    static processorServiceUpdateProcessor(id: string, body: {
        config?: v1ProcessorConfig;
    }): CancelablePromise<v1Processor>;
}
