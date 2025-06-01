import type { Edge, EdgeTypes } from '@xyflow/react';
import CustomEdge from './CustomEdge';

const animated   = {
          stroke: 'blue',
          strokeWidth: .6
        };

export const initialEdges: Edge[] = [
  { id: 'a->b', type : 'custom-edge' , source: 'a', target: 'b', animated  },
  { id: 'b->c', type : 'custom-edge' , source: 'b', target: 'c', animated },
  { id: 'c->d', source: 'c', target: 'd' },
];

export const edgeTypes = {
  'custom-edge': CustomEdge,
} satisfies EdgeTypes;
