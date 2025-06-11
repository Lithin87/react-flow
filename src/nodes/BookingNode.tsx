import { Handle, Position, type NodeProps } from '@xyflow/react';
import bookingIdIcon from '../images/bookingId.png'
import dateIcon from '../images/date.jpg'
import countryIcon from '../images/country.png'
import totalPersonIcon from '../images/totalPerson.jpg'

import { type BookingNode } from './nodes';

export function BookingNode({
  data,
}: NodeProps<BookingNode>) {

  return (

 <div className="react-flow__node-default">
   <div className="base">BOOKING</div>
  <div className={`name ${data.bookingId ? 'has-name' : ''}`}>
    <img src={bookingIdIcon} alt="Journey Icon" className="name-icon" /> {data.bookingId}
  </div>
  <div className={`age ${data.date ? 'has-age' : ''}`}>
     <img src={dateIcon} alt="Journey Icon" className="name-icon" /> {data.date}
  </div>
  <div className={`country ${data.stay ? 'has-country' : ''}`}>
    <img src={countryIcon} alt="Journey Icon" className="name-icon" />  {data.stay}
  </div>
   <div className={`country ${data.totalPerson ? 'has-country' : ''}`}>
     <img src={totalPersonIcon} alt="Journey Icon" className="name-icon" /> {data.totalPerson}
  </div>


     
  <Handle type="target" position={Position.Top} id="top-source" />
  <Handle type="source" position={Position.Bottom} id="bottom-source" />

    </div>
  );
}
