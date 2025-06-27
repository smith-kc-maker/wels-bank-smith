import React from 'react';
import { ArrowLeftRight, CreditCard, Receipt, Plus, Download, Smartphone, Building, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickActions: React.FC = () => {
  const navigate = useNavigate();

  const actions = [
    {
      name: 'Transfer Money',
      description: 'Send money instantly',
      icon: ArrowLeftRight,
      color: 'bg-red-600 hover:bg-red-700',
      onClick: () => navigate('/transfer'),
    },
    {
      name: 'Pay Bills',
      description: 'Schedule payments',
      icon: CreditCard,
      color: 'bg-green-600 hover:bg-green-700',
      onClick: () => navigate('/bills'),
    },
    {
      name: 'Mobile Deposit',
      description: 'Deposit checks',
      icon: Smartphone,
      color: 'bg-blue-600 hover:bg-blue-700',
      onClick: () => alert('Mobile check deposit coming soon!'),
    },
    {
      name: 'View Statements',
      description: 'Download & view',
      icon: Receipt,
      color: 'bg-purple-600 hover:bg-purple-700',
      onClick: () => navigate('/transactions'),
    },
    {
      name: 'Wire Transfer',
      description: 'International transfers',
      icon: Globe,
      color: 'bg-orange-600 hover:bg-orange-700',
      onClick: () => navigate('/transfer'),
    },
    {
      name: 'ATM Locator',
      description: 'Find nearby ATMs',
      icon: Building,
      color: 'bg-indigo-600 hover:bg-indigo-700',
      onClick: () => alert('ATM locator coming soon!'),
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <button
            key={action.name}
            onClick={action.onClick}
            className={`${action.color} text-white p-4 rounded-xl transition-all duration-300 flex flex-col items-center space-y-3 hover:scale-105 transform hover:shadow-lg group`}
          >
            <div className="bg-white bg-opacity-20 p-3 rounded-lg group-hover:bg-opacity-30 transition-all">
              <Icon className="h-6 w-6" />
            </div>
            <div className="text-center">
              <span className="text-sm font-semibold block">{action.name}</span>
              <span className="text-xs opacity-80">{action.description}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default QuickActions;