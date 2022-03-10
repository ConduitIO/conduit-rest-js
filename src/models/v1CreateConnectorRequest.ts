/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1ConnectorConfig } from './v1ConnectorConfig';
import type { v1ConnectorType } from './v1ConnectorType';

export type v1CreateConnectorRequest = {
    type?: v1ConnectorType;
    plugin?: string;
    pipelineId?: string;
    config?: v1ConnectorConfig;
};
