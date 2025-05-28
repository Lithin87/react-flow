import type { Edge, EdgeTypes } from '@xyflow/react';

export const initialEdges: Edge[] = [
  { id: 'a->b', source: 'a', target: 'b', animated: true },
  { id: 'b->c', source: 'b', target: 'c', animated: true },
  { id: 'c->d', source: 'c', target: 'd' },
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
