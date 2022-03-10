/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1PipelineStatus } from './v1PipelineStatus';

export type PipelineState = {
    status?: v1PipelineStatus;
    error?: string;
};
