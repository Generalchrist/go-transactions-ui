/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const AccountCard: React.FC<{ account: any }> = ({ account }) => {
  return (
    <div className=" border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg m-5 rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
      <h2 className="text-lg font-semibold text-gray-900">Account Details</h2>
      <div className="grid grid-cols-3">
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-500">Account Id:</p>
          <p className="text-base text-gray-800">{account.ID}</p>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-500">Document Number:</p>
          <p className="text-base text-gray-800">{account.DocumentNumber}</p>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-500">
            Available Credit Limit:
          </p>
          <p className="text-base text-green-600">
            ${account.AvailableCreditLimit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
