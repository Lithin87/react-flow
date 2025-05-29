import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { JourneyNode } from './JourneyNode';
import { TouchpointNode } from './TouchpointNode';
import { BookingNode } from './BookingNode';


import { AppNode } from './types';

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
  'position-logger': PositionLoggerNode,
  'journey': JourneyNode ,
  'touchpoint': TouchpointNode,
  'booking': BookingNode,

} satisfies NodeTypes;
