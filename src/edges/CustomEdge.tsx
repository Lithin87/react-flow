import React from 'react';
import { BaseEdge, getStraightPath } from '@xyflow/react';

interface CustomEdgeProps {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
}

const CustomEdge: React.FC<CustomEdgeProps> = ({ id, sourceX, sourceY, targetX, targetY }) => {
  // Assuming getStraightPath returns an array where the first element is the path string
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return <BaseEdge id={id} path={edgePath} />;
};

export default CustomEdge;
