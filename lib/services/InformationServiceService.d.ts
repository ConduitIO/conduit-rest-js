import type { apiv1Info } from '../models/apiv1Info';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class InformationServiceService {
    /**
     * @returns apiv1Info
     * @throws ApiError
     */
    static informationServiceGetInfo(): CancelablePromise<apiv1Info>;
}
