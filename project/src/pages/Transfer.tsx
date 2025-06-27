import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowLeftRight, Users, Building, Globe, CheckCircle, AlertCircle } from 'lucide-react';

interface TransferFormData {
  fromAccount: string;
  toAccount: string;
  amount: number;
  currency: string;
  description: string;
  transferType: 'internal' | 'external' | 'international';
  recipient: {
    name: string;
    email?: string;
    bankName?: string;
    accountNumber?: string;
    routingNumber?: string;
    swiftCode?: string;
  };
}

const Transfer: React.FC = () => {
  const [transferType, setTransferType] = useState<'internal' | 'external' | 'international'>('internal');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [transferData, setTransferData] = useState<TransferFormData | null>(null);

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<TransferFormData>();

  const accounts = [
    { id: '1', name: 'Primary Checking', balance: 24590.50, type: 'checking' },
    { id: '2', name: 'High Yield Savings', balance: 102869.25, type: 'savings' },
    { id: '3', name: 'Business Account', balance: 45320.75, type: 'business' },
  ];

  const watchedAmount = watch('amount');
  const watchedFromAccount = watch('fromAccount');

  const getSelectedAccountBalance = () => {
    const selectedAccount = accounts.find(acc => acc.id === watchedFromAccount);
    return selectedAccount?.balance || 0;
  };

  const onSubmit = (data: TransferFormData) => {
    setTransferData({ ...data, transferType });
    setShowConfirmation(true);
  };

  const confirmTransfer = () => {
    // Here you would typically call an API to process the transfer
    alert('Transfer completed successfully!');
    setShowConfirmation(false);
    setTransferData(null);
    reset();
  };

  const transferTypes = [
    {
      type: 'internal' as const,
      title: 'Between My Accounts',
      description: 'Transfer between your SecureBank accounts',
      icon: ArrowLeftRight,
      color: 'primary',
    },
    {
      type: 'external' as const,
      title: 'To Another Bank',
      description: 'Transfer to accounts at other banks',
      icon: Building,
      color: 'success',
    },
    {
      type: 'international' as const,
      title: 'International Transfer',
      description: 'Send money worldwide with competitive rates',
      icon: Globe,
      color: 'warning',
    },
  ];

  if (showConfirmation && transferData) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-center mb-6">
            <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Confirm Transfer</h2>
            <p className="text-gray-600">Please review the transfer details</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">From</p>
                  <p className="font-semibold">
                    {accounts.find(acc => acc.id === transferData.fromAccount)?.name}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">To</p>
                  <p className="font-semibold">
                    {transferType === 'internal' 
                      ? accounts.find(acc => acc.id === transferData.toAccount)?.name
                      : transferData.recipient.name
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center py-4">
              <p className="text-3xl font-bold text-primary-600">
                ${transferData.amount.toLocaleString()} {transferData.currency}
              </p>
              {transferData.description && (
                <p className="text-gray-600 mt-2">{transferData.description}</p>
              )}
            </div>

            {transferType !== 'internal' && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Recipient Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span>{transferData.recipient.name}</span>
                  </div>
                  {transferData.recipient.email && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span>{transferData.recipient.email}</span>
                    </div>
                  )}
                  {transferData.recipient.bankName && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bank:</span>
                      <span>{transferData.recipient.bankName}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => setShowConfirmation(false)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={confirmTransfer}
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Confirm Transfer
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Transfer Money</h1>
        <p className="text-gray-600">Send money quickly and securely</p>
      </div>

      {/* Transfer Type Selection */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Choose Transfer Type</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {transferTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = transferType === type.type;
            
            return (
              <button
                key={type.type}
                onClick={() => setTransferType(type.type)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  isSelected
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                  isSelected ? 'bg-primary-600' : 'bg-gray-100'
                }`}>
                  <Icon className={`h-6 w-6 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{type.title}</h3>
                <p className="text-sm text-gray-600">{type.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Transfer Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* From Account */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From Account
            </label>
            <select
              {...register('fromAccount', { required: 'Please select an account' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select account</option>
              {accounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.name} - ${account.balance.toLocaleString()}
                </option>
              ))}
            </select>
            {errors.fromAccount && (
              <p className="mt-1 text-sm text-error-600">{errors.fromAccount.message}</p>
            )}
          </div>

          {/* To Account/Recipient */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {transferType === 'internal' ? 'To Account' : 'Recipient Name'}
            </label>
            {transferType === 'internal' ? (
              <select
                {...register('toAccount', { required: 'Please select an account' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select account</option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.id}>
                    {account.name}
                  </option>
                ))}
              </select>
            ) : (
              <input
                {...register('recipient.name', { required: 'Recipient name is required' })}
                type="text"
                placeholder="Enter recipient name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            )}
            {(errors.toAccount || errors.recipient?.name) && (
              <p className="mt-1 text-sm text-error-600">
                {errors.toAccount?.message || errors.recipient?.name?.message}
              </p>
            )}
          </div>
        </div>

        {/* External/International Transfer Fields */}
        {transferType !== 'internal' && (
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bank Name
              </label>
              <input
                {...register('recipient.bankName', { required: 'Bank name is required' })}
                type="text"
                placeholder="Enter bank name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Number
              </label>
              <input
                {...register('recipient.accountNumber', { required: 'Account number is required' })}
                type="text"
                placeholder="Enter account number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {transferType === 'external' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Routing Number
                </label>
                <input
                  {...register('recipient.routingNumber', { required: 'Routing number is required' })}
                  type="text"
                  placeholder="Enter routing number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            )}

            {transferType === 'international' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SWIFT Code
                </label>
                <input
                  {...register('recipient.swiftCode', { required: 'SWIFT code is required' })}
                  type="text"
                  placeholder="Enter SWIFT code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            )}
          </div>
        )}

        {/* Amount and Currency */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <input
              {...register('amount', {
                required: 'Amount is required',
                min: { value: 0.01, message: 'Amount must be greater than 0' },
                max: { 
                  value: getSelectedAccountBalance(), 
                  message: 'Amount cannot exceed account balance' 
                },
              })}
              type="number"
              step="0.01"
              placeholder="0.00"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-lg"
            />
            {errors.amount && (
              <p className="mt-1 text-sm text-error-600">{errors.amount.message}</p>
            )}
            {watchedAmount > 0 && watchedFromAccount && (
              <div className="mt-2 text-sm text-gray-600">
                Remaining balance: ${(getSelectedAccountBalance() - (watchedAmount || 0)).toLocaleString()}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Currency
            </label>
            <select
              {...register('currency', { required: 'Currency is required' })}
              defaultValue="USD"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CAD">CAD</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description (Optional)
          </label>
          <input
            {...register('description')}
            type="text"
            placeholder="What's this transfer for?"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
          >
            Review Transfer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Transfer;