/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { apiv1Info } from '../models/apiv1Info';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InformationServiceService {

    /**
     * @returns apiv1Info
     * @throws ApiError
     */
    public static informationServiceGetInfo(): CancelablePromise<apiv1Info> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/info',
        });
    }

}