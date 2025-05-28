import type { Node, BuiltInNode } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type JourneyNode = Node<{ label: string }, 'input' | 'output'>;
// craete a Node with name , Country , Age , City          

export type AppNode = BuiltInNode | PositionLoggerNode;
