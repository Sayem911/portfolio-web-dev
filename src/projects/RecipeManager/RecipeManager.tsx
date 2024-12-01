import React, { useState } from 'react';
import { Book, Clock, Users, ChefHat, Search, Plus, Heart, Bookmark, Filter } from 'lucide-react';

interface Recipe {
  id: string;
  title: string;
  image: string;
  prepTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  isFavorite: boolean;
  isSaved: boolean;
}

const RecipeManager = () => {
  const [recipes] = useState<Recipe[]>([
    {
      id: '1',
      title: 'Grilled Salmon with Asparagus',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80',
      prepTime: 25,
      servings: 4,
      difficulty: 'Medium',
      category: 'Seafood',
      isFavorite: true,
      isSaved: true
    },
    {
      id: '2',
      title: 'Quinoa Buddha Bowl',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
      prepTime: 20,
      servings: 2,
      difficulty: 'Easy',
      category: 'Vegetarian',
      isFavorite: false,
      isSaved: true
    },
    {
      id: '3',
      title: 'Classic Beef Burger',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
      prepTime: 30,
      servings: 4,
      difficulty: 'Medium',
      category: 'Meat',
      isFavorite: true,
      isSaved: false
    },
    {
      id: '4',
      title: 'Mediterranean Pasta',
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=400&q=80',
      prepTime: 25,
      servings: 6,
      difficulty: 'Easy',
      category: 'Pasta',
      isFavorite: false,
      isSaved: true
    },
    {
      id: '5',
      title: 'Thai Green Curry',
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=80',
      prepTime: 35,
      servings: 4,
      difficulty: 'Hard',
      category: 'Asian',
      isFavorite: true,
      isSaved: true
    },
    {
      id: '6',
      title: 'Berry Smoothie Bowl',
      image: 'https://images.unsplash.com/photo-1490323914169-4d5db28abf90?auto=format&fit=crop&w=400&q=80',
      prepTime: 10,
      servings: 1,
      difficulty: 'Easy',
      category: 'Breakfast',
      isFavorite: false,
      isSaved: false
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const categories = ['All', 'Seafood', 'Vegetarian', 'Meat', 'Pasta', 'Asian', 'Breakfast'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Search and Filters */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>

            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-colors">
              <Plus className="w-5 h-5" />
              Add Recipe
            </button>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map(recipe => (
            <div key={recipe.id} className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-lg group">
              <div className="relative aspect-video">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    className={`p-2 rounded-full ${
                      recipe.isFavorite
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-900/50 text-white hover:bg-gray-900'
                    }`}
                  >
                    <Heart className="w-5 h-5" fill={recipe.isFavorite ? 'currentColor' : 'none'} />
                  </button>
                  <button
                    className={`p-2 rounded-full ${
                      recipe.isSaved
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-900/50 text-white hover:bg-gray-900'
                    }`}
                  >
                    <Bookmark className="w-5 h-5" fill={recipe.isSaved ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <span className={`absolute bottom-2 left-2 px-3 py-1 rounded-full text-xs font-medium ${
                  recipe.difficulty === 'Easy' ? 'bg-green-500' :
                  recipe.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                } text-white`}>
                  {recipe.difficulty}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{recipe.title}</h3>
                
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.prepTime} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors">
                    <ChefHat className="w-5 h-5" />
                    View Recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeManager;