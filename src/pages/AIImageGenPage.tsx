import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AIImageGen from '../projects/AIImageGen/AIImageGen';

const AIImageGenPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-gray-900">
      <nav className="bg-gray-900/80 backdrop-blur-sm p-4">
        <div className="container mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </nav>
      <AIImageGen />
    </div>
  );
};

export default AIImageGenPage;