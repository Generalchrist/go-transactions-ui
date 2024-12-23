import { useState } from "react";
import { Transaction } from "./models/models";
import { postTransaction } from "./services/api";

const TransactionForm: React.FC<{ onFormSubmit: () => void }> = ({
  onFormSubmit,
}) => {
  const [accountId, setAccountId] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleLogin = async () => {
    const transaction: Transaction = {
      accountId: accountId,
      operationTypeId: 4,
      amount: amount,
    };

    await postTransaction(transaction);

    onFormSubmit(); // Notify parent to refresh data
    setAccountId(0);
    setAmount(0);
  };

  return (
    <div className="isolate bg-white px-6 ">
      <div className="mx-auto max-w-2xl my-8 text-center">
        <p className="text-lg/8 my-2 font-medium tracking-tight">
          Make a transaction here!
        </p>
      </div>
      <div className="mx-auto max-w-xl ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm/6 font-semibold text-gray-900">
              Account Id
            </label>
            <div className="mt-2.5">
              <input
                id="accountId"
                value={accountId}
                maxLength={5}
                onInput={(e) =>
                  setAccountId(Number(e.currentTarget.value) || 0)
                }
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm/6 font-semibold text-gray-900">
              Amount
            </label>
            <div className="mt-2.5">
              <input
                id="amount"
                value={amount}
                maxLength={5}
                onInput={(e) => setAmount(Number(e.currentTarget.value) || 0)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          onClick={() => handleLogin()}
          disabled={!amount && !accountId}
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send Money!
        </button>
      </div>
    </div>
  );
};
export default TransactionForm;
