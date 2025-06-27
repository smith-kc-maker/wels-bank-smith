import React from 'react';
import { ArrowUpRight, ArrowDownLeft, CreditCard, Smartphone, Car, Home } from 'lucide-react';
import { format } from 'date-fns';

interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  currency: string;
  description: string;
  category: string;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
  merchant?: string;
}

interface TransactionCardProps {
  transaction: Transaction;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: transaction.currency || 'USD',
    }).format(amount);
  };

  const getCategoryIcon = () => {
    switch (transaction.category.toLowerCase()) {
      case 'shopping':
        return <CreditCard className="h-5 w-5" />;
      case 'mobile':
      case 'phone':
        return <Smartphone className="h-5 w-5" />;
      case 'transport':
      case 'gas':
        return <Car className="h-5 w-5" />;
      case 'utilities':
      case 'rent':
        return <Home className="h-5 w-5" />;
      default:
        return transaction.type === 'credit' ? 
          <ArrowDownLeft className="h-5 w-5" /> : 
          <ArrowUpRight className="h-5 w-5" />;
    }
  };

  const getStatusColor = () => {
    switch (transaction.status) {
      case 'completed':
        return 'text-success-600';
      case 'pending':
        return 'text-warning-600';
      case 'failed':
        return 'text-error-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-full ${
            transaction.type === 'credit' ? 'bg-success-50 text-success-600' : 'bg-error-50 text-error-600'
          }`}>
            {getCategoryIcon()}
          </div>
          
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">{transaction.description}</h4>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>{transaction.merchant || transaction.category}</span>
              <span>•</span>
              <span className={getStatusColor()}>{transaction.status}</span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <p className={`font-semibold ${
            transaction.type === 'credit' ? 'text-success-600' : 'text-gray-900'
          }`}>
            {transaction.type === 'credit' ? '+' : '-'}{formatCurrency(transaction.amount)}
          </p>
          <p className="text-sm text-gray-500">
            {format(transaction.date, 'MMM dd, yyyy')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;