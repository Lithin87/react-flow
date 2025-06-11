import { Handle, Position, type NodeProps } from '@xyflow/react';
import './JourneyNode.css'; 
import nameIcon from '../images/name.png';
import ageIcon from '../images/age.png';
import countryIcon from '../images/country.png';

import { type JourneyNode } from './nodes';

export function JourneyNode({
  data,
}: NodeProps<JourneyNode>) {
  
  return (
  
    <div className="react-flow__node-default">
       <div className="base">JOURNEY</div>
  <div className={`name ${data.name ? 'has-name' : ''}`}>
     <img src={nameIcon} alt="Journey Icon" className="name-icon" /> {data.name}
  </div>
  <div className={`age ${data.age ? 'has-age' : ''}`}>
    <img src={ageIcon} alt="Journey Icon" className="name-icon" /> {data.age}
  </div>
  <div className={`country ${data.country ? 'has-country' : ''}`}>
     <img src={countryIcon} alt="Journey Icon" className="name-icon" />  {data.country}
  </div>

     
  
  {/* Customized Handle (transparent or styled) */}
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-source"
        style={{
          width: '.01px',    // Hide the circle
          height: '.01px',   // Hide the circle
          background: 'green', // Optional: ensures invisibility
            border: 'blue',  
         
        }}
      />
    </div>
  );
}
