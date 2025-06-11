import { Handle, Position, type NodeProps } from '@xyflow/react';
import emailIcon from '../images/email.jpg';
import faxIcon from '../images/fax.png';
import mobileIcon from '../images/mobile.png';
import twitterIcon from '../images/twitter.png';

// import * as icons from '../images';


import { type TouchpointNode } from './nodes';

export function TouchpointNode({
  data,
}: NodeProps<TouchpointNode>) {

  return (


 <div className="react-flow__node-default">
  <div className="base">TOUCHPOINT</div>
  <div className={`name ${data.email ? 'has-name' : ''}`}>
    <img src={emailIcon} alt="Journey Icon" className="name-icon" />   {data.email}
  </div>
  <div className={`age ${data.mobile ? 'has-age' : ''}`}>
    <img src={mobileIcon} alt="Journey Icon" className="name-icon" /> {data.mobile}
  </div>
  <div className={`country ${data.fax ? 'has-country' : ''}`}>
     <img src={faxIcon} alt="Journey Icon" className="name-icon" />{data.fax}
  </div>
   <div className={`country ${data.twitter ? 'has-country' : ''}`}>
     <img src={twitterIcon} alt="Journey Icon" className="name-icon" /> {data.twitter}
  </div>


  <Handle type="target" position={Position.Top} id="top-source" />
  <Handle type="source" position={Position.Bottom} id="bottom-source" />
    </div>
  );
}
