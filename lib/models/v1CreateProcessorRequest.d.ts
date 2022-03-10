import type { ProcessorParent } from './ProcessorParent';
import type { v1ProcessorConfig } from './v1ProcessorConfig';
import type { v1ProcessorType } from './v1ProcessorType';
export declare type v1CreateProcessorRequest = {
    name?: string;
    type?: v1ProcessorType;
    parent?: ProcessorParent;
    config?: v1ProcessorConfig;
};
