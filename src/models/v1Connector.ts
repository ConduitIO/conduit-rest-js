/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConnectorDestinationState } from './ConnectorDestinationState';
import type { ConnectorSourceState } from './ConnectorSourceState';
import type { v1ConnectorConfig } from './v1ConnectorConfig';
import type { v1ConnectorType } from './v1ConnectorType';

export type v1Connector = {
    readonly id?: string;
    destinationState?: ConnectorDestinationState;
    sourceState?: ConnectorSourceState;
    config?: v1ConnectorConfig;
    type?: v1ConnectorType;
    plugin?: string;
    pipelineId?: string;
    readonly processorIds?: Array<string>;
};
