import React from 'react';
import { CreditCard, Eye, EyeOff, TrendingUp, TrendingDown, MoreHorizontal } from 'lucide-react';

interface Account {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'credit';
  balance: number;
  currency: string;
  lastTransaction?: {
    amount: number;
    date: string;
  };
}

interface AccountCardProps {
  account: Account;
  showBalance: boolean;
  onToggleBalance: () => void;
}

const AccountCard: React.FC<AccountCardProps> = ({ account, showBalance, onToggleBalance }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: account.currency || 'USD',
    }).format(amount);
  };

  const getAccountColor = () => {
    switch (account.type) {
      case 'checking':
        return 'bg-gradient-to-br from-red-600 to-red-700';
      case 'savings':
        return 'bg-gradient-to-br from-green-600 to-green-700';
      case 'credit':
        return 'bg-gradient-to-br from-gray-700 to-gray-800';
      default:
        return 'bg-gradient-to-br from-red-600 to-red-700';
    }
  };

  const getAccountIcon = () => {
    switch (account.type) {
      case 'checking':
        return '💳';
      case 'savings':
        return '🏦';
      case 'credit':
        return '💎';
      default:
        return '💳';
    }
  };

  return (
    <div className={`${getAccountColor()} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <div className="w-full h-full bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{getAccountIcon()}</div>
            <div>
              <h3 className="text-lg font-bold">{account.name}</h3>
              <p className="text-sm opacity-80 capitalize">
                {account.type === 'checking' ? 'Everyday Banking' : 
                 account.type === 'savings' ? 'High Yield Savings' : 
                 'Platinum Credit'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={onToggleBalance}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
            <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm opacity-80 mb-1">
            {account.type === 'credit' ? 'Available Credit' : 'Available Balance'}
          </p>
          <p className="text-3xl font-bold">
            {showBalance ? formatCurrency(Math.abs(account.balance)) : '••••••••'}
          </p>
          {account.type === 'credit' && (
            <p className="text-sm opacity-80 mt-1">
              Current Balance: {showBalance ? formatCurrency(Math.abs(account.balance)) : '••••••'}
            </p>
          )}
        </div>

        {account.lastTransaction && (
          <div className="flex items-center justify-between text-sm border-t border-white border-opacity-20 pt-4">
            <span className="opacity-80">Last transaction</span>
            <div className="flex items-center space-x-2">
              {account.lastTransaction.amount > 0 ? (
                <TrendingUp className="h-4 w-4 text-green-300" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-300" />
              )}
              <span className="font-semibold">
                {showBalance ? formatCurrency(Math.abs(account.lastTransaction.amount)) : '••••'}
              </span>
            </div>
          </div>
        )}

        {/* Account Number (masked) */}
        <div className="mt-4 pt-4 border-t border-white border-opacity-20">
          <p className="text-xs opacity-60">Account ending in</p>
          <p className="text-sm font-mono">••••{account.id.padStart(4, '0')}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;