import type { Edge, EdgeTypes } from '@xyflow/react';
import CustomEdge from './CustomEdge';

export const initialEdges: Edge[] = [
  { id: 'a->b', type : 'custom-edge' , source: 'a', target: 'b', animated: true },
  { id: 'b->c', type : 'custom-edge' , source: 'b', target: 'c', animated: true },
  { id: 'c->d', source: 'c', target: 'd' },
];

export const edgeTypes = {
  'custom-edge': CustomEdge,
} satisfies EdgeTypes;
