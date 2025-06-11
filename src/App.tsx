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

  // const { toObject } = useReactFlow(); 

    // Define your API endpoint here
    const API_ENDPOINT = 'YOUR_API_ENDPOINT_HERE'; // <--- IMPORTANT: Replace with your actual API endpoint



    const sendHelloToAPI = useCallback(async () => {
      try {
        const flowData = { nodes , edges};
        const newFlow =  JSON.stringify(flowData, null, 2);
        const response = await fetch(API_ENDPOINT, {
          method: 'POST', // Or 'GET', 'PUT', etc., depending on your API
          headers: {
            'Content-Type': 'application/json', // Specify content type for JSON data
            // Add any other headers your API might require (e.g., Authorization)
          },
          body: JSON.stringify({ message: newFlow }), // Send the string as a JSON object
        });
  
        if (!response.ok) {
          // Handle HTTP errors (e.g., 404, 500)
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json(); // If your API returns JSON
        console.log('API Response:', data);
        alert('String "hello" sent successfully!'); // Provide user feedback
      } catch (error) {
        console.error('Error sending data to API:', error);
        alert('Failed to send string "hello". Check console for details.'); // Provide user feedback
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
          position: 'absolute', // Position the button
          bottom: 20, // Adjust position as needed
          left: 20, // Adjust position as needed
          zIndex: 10, // Ensure it's above the ReactFlow elements
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
