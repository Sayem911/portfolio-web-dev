import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import RecipeManager from '../projects/RecipeManager/RecipeManager';

const RecipeManagerPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-900/80 backdrop-blur-sm p-4">
        <div className="container mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </nav>
      <RecipeManager />
    </div>
  );
};

export default RecipeManagerPage;