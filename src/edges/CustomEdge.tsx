import {
    BaseEdge,
    EdgeLabelRenderer,
    getStraightPath,
    getSmoothStepPath,
    getSimpleBezierPath,
    getBezierPath,
    useReactFlow,
  } from '@xyflow/react';
   
  export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
    const { setEdges } = useReactFlow();
    const [edgePath] = getSimpleBezierPath({
      sourceX,
      sourceY,
      targetX,
      targetY,
    });
   
    return (
      <>
        <BaseEdge id={id} path={edgePath} />
        <EdgeLabelRenderer>
           
          <button
            onClick={() => setEdges((edges) => edges.filter((e) => e.id !== id))}
          >
            delete {sourceX.toFixed(0)} {sourceY.toFixed(0)} {targetX.toFixed(0)} {targetY.toFixed(0)}
          </button>
        </EdgeLabelRenderer>
      </>
    );
  }