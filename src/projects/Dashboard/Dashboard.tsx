import React from 'react';
import { BarChart3, Users, ShoppingBag, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Revenue', value: '$54,239', change: '+12.5%', icon: DollarSign, trend: 'up' },
    { title: 'Active Users', value: '2,345', change: '+18.2%', icon: Users, trend: 'up' },
    { title: 'Total Sales', value: '1,235', change: '-3.1%', icon: ShoppingBag, trend: 'down' },
    { title: 'Conversion Rate', value: '3.15%', change: '+5.4%', icon: TrendingUp, trend: 'up' },
  ];

  const recentTransactions = [
    { id: 1, customer: 'John Doe', amount: '$125.00', status: 'completed', date: '2024-03-10' },
    { id: 2, customer: 'Jane Smith', amount: '$239.99', status: 'pending', date: '2024-03-09' },
    { id: 3, customer: 'Mike Johnson', amount: '$499.99', status: 'completed', date: '2024-03-09' },
    { id: 4, customer: 'Sarah Wilson', amount: '$89.99', status: 'failed', date: '2024-03-08' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <span className={`flex items-center text-sm ${
                  stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.change}
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 ml-1" />
                  )}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-4">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Revenue Overview</h2>
              <BarChart3 className="w-5 h-5 text-gray-400" />
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
            <h2 className="text-lg font-semibold text-white mb-6">Recent Transactions</h2>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg"
                >
                  <div>
                    <p className="text-sm font-medium text-white">{transaction.customer}</p>
                    <p className="text-xs text-gray-400">{transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-white">{transaction.amount}</p>
                    <p className={`text-xs ${
                      transaction.status === 'completed' ? 'text-green-400' :
                      transaction.status === 'pending' ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </p>
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

export default Dashboard;