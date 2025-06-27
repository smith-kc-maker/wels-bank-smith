import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import AccountCard from '../components/Banking/AccountCard';
import TransactionCard from '../components/Banking/TransactionCard';
import QuickActions from '../components/Banking/QuickActions';
import { TrendingUp, DollarSign, CreditCard, PiggyBank, ArrowUpRight, Bell, Calendar, Download, Eye, EyeOff } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [showBalances, setShowBalances] = useState(true);

  // Mock data
  const accounts = [
    {
      id: '1',
      name: 'Everyday Checking',
      type: 'checking' as const,
      balance: 24590.50,
      currency: 'USD',
      lastTransaction: { amount: -45.67, date: '2024-01-15' },
    },
    {
      id: '2',
      name: 'Way2Save Savings',
      type: 'savings' as const,
      balance: 102869.25,
      currency: 'USD',
      lastTransaction: { amount: 1200.00, date: '2024-01-14' },
    },
    {
      id: '3',
      name: 'Platinum Card',
      type: 'credit' as const,
      balance: -2450.75,
      currency: 'USD',
      lastTransaction: { amount: -89.99, date: '2024-01-15' },
    },
  ];

  const recentTransactions = [
    {
      id: '1',
      type: 'debit' as const,
      amount: 45.67,
      currency: 'USD',
      description: 'Whole Foods Market',
      category: 'Shopping',
      date: new Date('2024-01-15'),
      status: 'completed' as const,
      merchant: 'Whole Foods Market',
    },
    {
      id: '2',
      type: 'credit' as const,
      amount: 3200.00,
      currency: 'USD',
      description: 'Salary Deposit',
      category: 'Income',
      date: new Date('2024-01-14'),
      status: 'completed' as const,
      merchant: 'ABC Company Inc.',
    },
    {
      id: '3',
      type: 'debit' as const,
      amount: 89.99,
      currency: 'USD',
      description: 'Comcast Internet',
      category: 'Utilities',
      date: new Date('2024-01-13'),
      status: 'completed' as const,
      merchant: 'Comcast',
    },
    {
      id: '4',
      type: 'debit' as const,
      amount: 150.00,
      currency: 'USD',
      description: 'Shell Gas Station',
      category: 'Transport',
      date: new Date('2024-01-12'),
      status: 'pending' as const,
      merchant: 'Shell',
    },
  ];

  const monthlySpending = [
    { month: 'Jul', amount: 2400 },
    { month: 'Aug', amount: 3200 },
    { month: 'Sep', amount: 2800 },
    { month: 'Oct', amount: 3600 },
    { month: 'Nov', amount: 3100 },
    { month: 'Dec', amount: 2900 },
    { month: 'Jan', amount: 3400 },
  ];

  const balanceHistory = [
    { date: '1/1', balance: 120000 },
    { date: '1/5', balance: 122000 },
    { date: '1/10', balance: 118000 },
    { date: '1/15', balance: 125000 },
    { date: '1/20', balance: 127000 },
    { date: '1/25', balance: 124000 },
    { date: '1/30', balance: 127459 },
  ];

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner with Wells Fargo styling */}
      <div className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white mb-8 rounded-xl overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Professional banking" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-800/80 to-red-600/60"></div>
        </div>
        
        <div className="relative p-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">Welcome back! 👋</h1>
              <p className="text-red-100 text-lg">Here's your financial overview for today</p>
              <div className="flex items-center mt-4 space-x-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-yellow-300" />
                  <span className="text-sm">Last updated: Today, 2:30 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-yellow-300" />
                  <span className="text-sm">3 new notifications</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[300px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-red-100">Total Portfolio Value</span>
                <button
                  onClick={() => setShowBalances(!showBalances)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  {showBalances ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <div className="text-4xl font-bold mb-2">
                {showBalances ? `$${totalBalance.toLocaleString()}` : '••••••••'}
              </div>
              <div className="flex items-center text-yellow-300">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+2.5% from last month</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available Balance</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${showBalances ? totalBalance.toLocaleString() : '••••••'}
                </p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">+2.5%</span>
              <span className="text-gray-500 ml-1">from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Spending</p>
                <p className="text-2xl font-bold text-gray-900">$3,400</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <CreditCard className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <ArrowUpRight className="h-4 w-4 text-red-600 mr-1" />
              <span className="text-red-600 font-medium">+12%</span>
              <span className="text-gray-500 ml-1">from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Savings Goal</p>
                <p className="text-2xl font-bold text-gray-900">68%</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <PiggyBank className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
              <div className="bg-red-600 h-2 rounded-full transition-all duration-500" style={{ width: '68%' }}></div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Credit Score</p>
                <p className="text-2xl font-bold text-gray-900">785</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <span className="text-green-600 font-medium">Excellent</span>
              <span className="text-gray-500 ml-2">+5 points</span>
            </div>
          </div>
        </div>

        {/* Quick Actions - Wells Fargo Style */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
            <button className="text-red-600 hover:text-red-700 font-medium text-sm">
              View All Services
            </button>
          </div>
          <QuickActions />
        </div>

        {/* Accounts Overview */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Your Accounts</h2>
            <div className="flex items-center space-x-4">
              <button className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center">
                <Download className="h-4 w-4 mr-1" />
                Download Statements
              </button>
              <button
                onClick={() => setShowBalances(!showBalances)}
                className="text-gray-600 hover:text-gray-700 font-medium text-sm flex items-center"
              >
                {showBalances ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
                {showBalances ? 'Hide' : 'Show'} Balances
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accounts.map((account) => (
              <AccountCard
                key={account.id}
                account={account}
                showBalance={showBalances}
                onToggleBalance={() => setShowBalances(!showBalances)}
              />
            ))}
          </div>
        </div>

        {/* Charts Section with Wells Fargo styling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Spending Analysis</h3>
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Last 7 months</option>
                <option>Last 12 months</option>
                <option>This year</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlySpending}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  formatter={(value) => [`$${value}`, 'Spending']}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="amount" fill="#DC2626" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Balance Trend</h3>
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>This month</option>
                <option>Last 3 months</option>
                <option>Last 6 months</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={balanceHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  formatter={(value) => [`$${value?.toLocaleString()}`, 'Balance']}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="balance" 
                  stroke="#DC2626" 
                  strokeWidth={3}
                  dot={{ fill: '#DC2626', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: '#DC2626' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
              <div className="flex items-center space-x-4">
                <button className="text-red-600 hover:text-red-700 font-medium text-sm">
                  View All Transactions
                </button>
                <button className="text-gray-600 hover:text-gray-700 font-medium text-sm flex items-center">
                  <Download className="h-4 w-4 mr-1" />
                  Export
                </button>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {recentTransactions.map((transaction) => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
          </div>
        </div>

        {/* Financial Insights Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Financial planning" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0">
                <h3 className="text-2xl font-bold mb-2">Ready to grow your wealth?</h3>
                <p className="text-red-100 text-lg">
                  Schedule a free consultation with our financial advisors to optimize your portfolio.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-400 text-red-800 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;