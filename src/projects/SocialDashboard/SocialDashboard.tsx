import React from 'react';
import { LineChart, Users, MessageSquare, Share2, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const SocialDashboard = () => {
  const platforms = [
    {
      name: 'Twitter',
      followers: '24.5K',
      engagement: '+12%',
      trend: 'up',
      color: 'bg-blue-500'
    },
    {
      name: 'Instagram',
      followers: '18.2K',
      engagement: '+8%',
      trend: 'up',
      color: 'bg-pink-500'
    },
    {
      name: 'LinkedIn',
      followers: '12.4K',
      engagement: '-2%',
      trend: 'down',
      color: 'bg-blue-600'
    },
    {
      name: 'Facebook',
      followers: '32.1K',
      engagement: '+5%',
      trend: 'up',
      color: 'bg-blue-700'
    }
  ];

  const recentPosts = [
    {
      id: 1,
      platform: 'Twitter',
      content: 'Excited to announce our new product launch! 🚀',
      engagement: '1.2K',
      shares: 245,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      platform: 'Instagram',
      content: 'Behind the scenes at our annual team retreat 📸',
      engagement: '3.4K',
      shares: 156,
      color: 'bg-pink-500'
    },
    {
      id: 3,
      platform: 'LinkedIn',
      content: 'New blog post: "10 Tips for Remote Work Success"',
      engagement: '892',
      shares: 124,
      color: 'bg-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <div key={platform.name} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
              <div className="flex items-center justify-between">
                <div className={`p-2 ${platform.color}/10 rounded-lg`}>
                  <Users className={`w-6 h-6 ${platform.color} text-opacity-80`} />
                </div>
                <span className={`flex items-center text-sm ${
                  platform.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {platform.engagement}
                  {platform.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 ml-1" />
                  )}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-4">{platform.followers}</h3>
              <p className="text-gray-400 text-sm">{platform.name} Followers</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Engagement Overview</h2>
              <LineChart className="w-5 h-5 text-gray-400" />
            </div>
            <div className="h-64 flex items-end justify-between gap-2">
              {[65, 45, 75, 55, 85, 35, 95].map((height, i) => (
                <div key={i} className="w-full bg-gray-700 rounded-t-lg relative group">
                  <div
                    className="absolute bottom-0 w-full bg-blue-500 rounded-t-lg transition-all duration-300 group-hover:bg-blue-400"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm text-gray-400">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
            <h2 className="text-lg font-semibold text-white mb-6">Recent Posts</h2>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 bg-gray-700/30 rounded-lg"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${post.color}`}></div>
                    <span className="text-sm text-gray-400">{post.platform}</span>
                  </div>
                  <p className="text-white text-sm mb-3">{post.content}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {post.engagement}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" />
                        {post.shares}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-blue-400">
                      <TrendingUp className="w-4 h-4" />
                      Trending
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialDashboard;