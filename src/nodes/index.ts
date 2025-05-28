import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { AppNode } from './types';

export const initialNodes: AppNode[] = [
  { id: 'a', type: 'input', position: { x: 0, y: 0 }, data: { label: 'Journey' } },

  { id: 'b',  type: 'position-logger',  position: { x: 0, y: 100 }, data: { label: 'Touchpoints' } },
  {
    id: 'c',
    type: 'output',
    position: { x: 0, y: 200 },
    data: { label: 'Booking' },
  },
];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
