/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProcessorParent } from './ProcessorParent';
import type { v1ProcessorConfig } from './v1ProcessorConfig';
import type { v1ProcessorType } from './v1ProcessorType';

export type v1Processor = {
    readonly id?: string;
    config?: v1ProcessorConfig;
    name?: string;
    type?: v1ProcessorType;
    parent?: ProcessorParent;
};
