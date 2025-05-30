import type { Edge, EdgeTypes } from '@xyflow/react';
import CustomEdge from './CustomEdge';


export const initialEdges: Edge[] = [
  { id: 'a->b' , type : 'smoothstep' ,source: 'a', target: 'b', animated: true },
  { id: 'b->c' , source: 'b', target: 'c', animated: true },
  { id: 'c->d', source: 'c', target: 'd' },
];

export const edgeTypes = {
  'custom': CustomEdge, 
} satisfies EdgeTypes;
