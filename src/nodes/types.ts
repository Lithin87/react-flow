import type { Node, BuiltInNode } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type JourneyNode = Node<{ name?: string , age? : number , country? : string }, 'journey'>;
export type TouchpointNode = Node<{ email?: string , mobile? : number , fax? : string , twitter? : string }, 'touchpoint'>;
export type BookingNode = Node<{ bookingId? : number, date?: string , stay? : number , totalPerson? : number }, 'booking'>;
         

export type AppNode = BuiltInNode | PositionLoggerNode | JourneyNode | TouchpointNode | BookingNode;
