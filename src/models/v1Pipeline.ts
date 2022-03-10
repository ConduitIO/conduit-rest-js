/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PipelineState } from './PipelineState';
import type { v1PipelineConfig } from './v1PipelineConfig';

export type v1Pipeline = {
    readonly id?: string;
    state?: PipelineState;
    config?: v1PipelineConfig;
    readonly connectorIds?: Array<string>;
    readonly processorIds?: Array<string>;
};
