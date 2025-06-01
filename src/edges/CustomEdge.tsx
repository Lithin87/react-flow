import React from 'react';
import { BaseEdge, getBezierPath  , getSmoothStepPath ,getStraightPath } from '@xyflow/react';

interface AnimatedStyles {
  stroke: string;
  strokeWidth: number;
}

interface CustomEdgeProps {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  animated:  AnimatedStyles; // Allow animated to be a boolean or an object with styles
}

const CustomEdge: React.FC<CustomEdgeProps> = ({ id, sourceX, sourceY, targetX, targetY , animated}) => {
  const [edgePath] = getBezierPath ({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  // Define a unique ID for the marker for this edge type
  // It's good practice to make this unique or manage it globally
  const markerId = `arrowhead-${id}`; // Or just `arrowhead` if defined globally

  return (
    <>
      <defs>
        <marker
          id={markerId} // Use the unique ID
          viewBox="0 -5 10 10" // Defines the coordinate system for the marker
          refX="10" // X-coordinate in the marker's viewBox that should be aligned with the end of the path
          refY="0" // Y-coordinate in the marker's viewBox that should be aligned with the end of the path
          markerWidth="10" // Width of the marker
          markerHeight="10" // Height of the marker
          orient="auto-start-reverse" // Auto-orient the arrowhead with the path direction
          fill="#333" // Color of the arrowhead (adjust as needed)
        >
          <path d="M0,-5L10,0L0,5" className="react-flow__arrowhead" /> {/* Arrowhead shape */}
        </marker>
      </defs>

      {/* Render the BaseEdge with the markerEnd attribute */}
      <BaseEdge id={id} path={edgePath}  style={animated} />
    </>
  );
};

export default CustomEdge;