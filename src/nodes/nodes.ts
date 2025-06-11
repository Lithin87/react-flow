import type { NodeTypes ,  Node, BuiltInNode } from '@xyflow/react';

import { JourneyNode } from './JourneyNode';
import { TouchpointNode } from './TouchpointNode';
import { BookingNode } from './BookingNode';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type JourneyNode = Node<{ name?: string , age? : number , country? : string }, 'journey'>;
export type TouchpointNode = Node<{ email?: string , mobile? : number , fax? : string , twitter? : string }, 'touchpoint'>;
export type BookingNode = Node<{ bookingId? : number, date?: string , stay? : number , totalPerson? : number }, 'booking'>;
         
export type AppNode = BuiltInNode | PositionLoggerNode | JourneyNode | TouchpointNode | BookingNode;


export const initialNodes: AppNode[] = [
  { id: 'a', type: 'journey', position: { x: 0, y: 0 }, data: { name: "John", age: 36, country: "USA" } },

  { id: 'b',  type: 'touchpoint',  position: { x: 0, y: 100 }, data: { email: 'john@gmail.com' , mobile : 8165489654, 
    fax : '+1-212-555-1234' , twitter : 'john@twitter.com'} },
  {
    id: 'c',
    type: 'booking',
    position: { x: 0, y: 200 },
    data: { bookingId : 12345, date : '12-Nov-2003' , stay : 8165489654, totalPerson : 4 },
  },
];

export const nodeTypes = {
  'journey': JourneyNode ,
  'touchpoint': TouchpointNode,
  'booking': BookingNode,

} satisfies NodeTypes;


