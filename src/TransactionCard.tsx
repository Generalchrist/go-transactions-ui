/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const TransactionCard: React.FC<{ transaction: any }> = ({ transaction }) => {
  return (
    <div className=" border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg m-5 rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
      <h2 className="text-lg font-semibold text-gray-900">
        Transaction Details
      </h2>
      <div className="grid grid-cols-3">
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-500">Account ID:</p>
          <p className="text-base text-gray-800">{transaction.AccountID}</p>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-500">Amount:</p>
          <p className="text-base text-green-600">${transaction.Amount}</p>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-500">Event Date:</p>
          <p className="text-base text-gray-800">
            {new Date(transaction.EventDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
