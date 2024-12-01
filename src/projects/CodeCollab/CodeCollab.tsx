import React, { useEffect, useState, useRef } from 'react';
import Editor from "@monaco-editor/react";
import { Users, Share2 } from 'lucide-react';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import { MonacoBinding } from 'y-monaco';

const CodeCollab = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [activeUsers, setActiveUsers] = useState(1);
  const providerRef = useRef<WebrtcProvider | null>(null);
  const docRef = useRef<Y.Doc | null>(null);

  useEffect(() => {
    // Simulate other users joining
    const interval = setInterval(() => {
      setActiveUsers(prev => (prev < 3 ? prev + 1 : prev));
    }, 3000);

    return () => {
      clearInterval(interval);
      // Clean up WebRTC provider and doc when component unmounts
      if (providerRef.current) {
        providerRef.current.destroy();
        providerRef.current = null;
      }
      if (docRef.current) {
        docRef.current.destroy();
        docRef.current = null;
      }
    };
  }, []);

  const handleEditorDidMount = (editor: any) => {
    // Create a unique room ID for each session
    const roomId = `code-collab-${Date.now()}`;
    
    // Initialize Yjs
    const doc = new Y.Doc();
    docRef.current = doc;
    
    const provider = new WebrtcProvider(roomId, doc);
    providerRef.current = provider;
    
    const type = doc.getText('monaco');

    // Bind Monaco editor
    new MonacoBinding(type, editor.getModel(), new Set([editor]), provider.awareness);
    setIsConnected(true);
  };

  return (
    <div className="h-[600px] bg-gray-900 flex flex-col">
      <div className="bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-green-400" />
            <span className="text-sm text-gray-300">{activeUsers} active users</span>
          </div>
          <div className="h-4 w-px bg-gray-700"></div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
            <span className="text-sm text-gray-300">{isConnected ? 'Connected' : 'Connecting...'}</span>
          </div>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors">
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>

      <div className="flex-1 overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue={`// Welcome to CodeCollab! 👋
// Start typing to collaborate in real-time...

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Try implementing a new function below:
`}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            padding: { top: 16 },
          }}
          onMount={handleEditorDidMount}
        />
      </div>
    </div>
  );
};

export default CodeCollab;