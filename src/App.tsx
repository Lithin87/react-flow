import { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
  type OnConnect,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { initialNodes, nodeTypes } from './nodes/nodes';
import { initialEdges, edgeTypes } from './edges';


export default function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

    const API_ENDPOINT = 'YOUR_API_ENDPOINT_HERE'; 

    const sendHelloToAPI = useCallback(async () => {
      const flowData = { nodes , edges};
      const newFlow =  JSON.stringify(flowData, null, 2);
      console.log('API Response:', JSON.stringify({ message: newFlow }));
      try {
        const response = await fetch(API_ENDPOINT, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify({ message: newFlow }), 
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json(); // If your API returns JSON
        console.log('API Response:', data);
        alert('String "hello" sent successfully!'); // Provide user feedback
      } catch (error) {
        console.error('Error sending data to API:', error);
        alert('Failed to send string "hello". Check console for details.' + newFlow ); // Provide user feedback
      }
    }, [API_ENDPOINT]); // Depend on API_ENDPOINT if it can change
  
  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
    {/* Button to send "hello" to API */}
    <button
        onClick={sendHelloToAPI}
        style={{
          position: 'absolute', 
          bottom: 20, 
          left: 20, 
          zIndex: 10, 
          padding: '10px 15px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Send "hello" to API
      </button>

      <Background  gap={10}
       color="#FFA500"
         variant={BackgroundVariant.Dots}/>
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
