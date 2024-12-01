import React, { useState } from 'react';
import { Wallet, PieChart, TrendingUp, DollarSign, Plus, Calendar, ArrowUpRight, ArrowDownRight, Filter } from 'lucide-react';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  type: 'income' | 'expense';
}

const BudgetTracker = () => {
  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      description: 'Salary',
      amount: 5000,
      category: 'Income',
      date: '2024-03-01',
      type: 'income'
    },
    {
      id: '2',
      description: 'Rent',
      amount: 1500,
      category: 'Housing',
      date: '2024-03-02',
      type: 'expense'
    },
    {
      id: '3',
      description: 'Groceries',
      amount: 200,
      category: 'Food',
      date: '2024-03-03',
      type: 'expense'
    },
    {
      id: '4',
      description: 'Freelance Work',
      amount: 1000,
      category: 'Income',
      date: '2024-03-04',
      type: 'income'
    },
    {
      id: '5',
      description: 'Utilities',
      amount: 150,
      category: 'Bills',
      date: '2024-03-05',
      type: 'expense'
    }
  ]);

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  const stats = [
    {
      title: 'Total Balance',
      value: `$${balance.toLocaleString()}`,
      change: '+12.5%',
      trend: 'up',
      icon: Wallet,
      color: 'blue'
    },
    {
      title: 'Total Income',
      value: `$${totalIncome.toLocaleString()}`,
      change: '+18.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'Total Expenses',
      value: `$${totalExpenses.toLocaleString()}`,
      change: '-3.1%',
      trend: 'down',
      icon: DollarSign,
      color: 'red'
    },
    {
      title: 'Monthly Savings',
      value: '$1,250',
      change: '+5.4%',
      trend: 'up',
      icon: PieChart,
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
              <div className="flex items-center justify-between">
                <div className={`p-2 bg-${stat.color}-500/10 rounded-lg`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
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

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Recent Transactions</h2>
              <div className="flex items-center gap-2">
                <button className="p-2 bg-gray-700/50 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors">
                  <Filter className="w-5 h-5" />
                </button>
                <button className="p-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="bg-gray-700/30 rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 ${
                      transaction.type === 'income' ? 'bg-green-500/10' : 'bg-red-500/10'
                    } rounded-lg`}>
                      {transaction.type === 'income' ? (
                        <TrendingUp className={`w-5 h-5 ${
                          transaction.type === 'income' ? 'text-green-400' : 'text-red-400'
                        }`} />
                      ) : (
                        <DollarSign className={`w-5 h-5 ${
                          transaction.type === 'income' ? 'text-green-400' : 'text-red-400'
                        }`} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{transaction.description}</h3>
                      <p className="text-sm text-gray-400">{transaction.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      transaction.type === 'income' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-400">{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expense Categories */}
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
            <h2 className="text-lg font-semibold text-white mb-6">Expense Categories</h2>
            <div className="space-y-4">
              {[
                { category: 'Housing', amount: 1500, percentage: 40 },
                { category: 'Food', amount: 600, percentage: 20 },
                { category: 'Transportation', amount: 400, percentage: 15 },
                { category: 'Utilities', amount: 300, percentage: 10 },
                { category: 'Entertainment', amount: 200, percentage: 8 },
              ].map((category) => (
                <div key={category.category} className="bg-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium">{category.category}</h3>
                    <p className="text-gray-400">${category.amount}</p>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 rounded-full h-2 transition-all duration-300"
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{category.percentage}% of total</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Overview */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
          <h2 className="text-lg font-semibold text-white mb-6">Monthly Overview</h2>
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
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;