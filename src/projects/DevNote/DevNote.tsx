import React, { useState } from 'react';
import { FileText, Moon, Sun, Copy } from 'lucide-react';

const DevNote = () => {
  const [markdown, setMarkdown] = useState('# Welcome to DevNote!\n\n```javascript\n// Example code\nconst greeting = "Hello, World!";\nconsole.log(greeting);\n```\n\nStart typing to see the preview...');
  const [isDark, setIsDark] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown);
  };

  return (
    <div className={`min-h-[400px] ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="border-b border-gray-700">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2">
            <FileText className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>DevNote</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={`p-1.5 rounded-md ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
            >
              <Copy className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-1.5 rounded-md ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-gray-400" />
              ) : (
                <Moon className="w-4 h-4 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 h-[calc(400px-40px)]">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className={`p-4 resize-none focus:outline-none font-mono text-sm ${
            isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'
          }`}
          placeholder="Type your markdown here..."
        />
        <div
          className={`border-l ${isDark ? 'border-gray-700' : 'border-gray-300'} p-4 overflow-auto`}
        >
          <pre className={`font-mono text-sm ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
            {markdown}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DevNote;