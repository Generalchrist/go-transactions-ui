import { useEffect, useState } from "react";
import AccountForm from "./AccountForm";
import TransactionForm from "./TransactionForm";
import { getAccounts, getTransactions } from "./services/api";
import AccountCard from "./AccountCard";
import TransactionCard from "./TransactionCard";

function App() {
  const [account, setAccount] = useState([]);
  const [transaction, setTransaction] = useState([]);

  const fetchData = async () => {
    const acc = await getAccounts();
    const tra = await getTransactions();

    setAccount(acc);
    setTransaction(tra);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 h-full ">
      <div className="mx-auto max-w-2xl px-3 lg:px-0 lg:max-w-screen-2xl  flex flex-col justify-center h-full">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          Mert Patlar
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Go Transactions
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-6 sm:px-10 sm:pt-10 border border-b-indigo-600">
                <p className=" text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  All Accounts
                </p>
              </div>
              <div className="relative h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm overflow-y-scroll">
                {account &&
                  account.map((account, index) => (
                    <AccountCard key={index} account={account} />
                  ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <AccountForm onFormSubmit={fetchData} />
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <TransactionForm onFormSubmit={fetchData} />
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-6 sm:px-10 sm:pt-10 border border-b-indigo-600">
                <p className=" text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  All Transactions
                </p>
              </div>
              <div className="relative h-[30rem] w-full grow overflow-y-scroll">
                {transaction &&
                  transaction.map((transaction, index) => (
                    <TransactionCard key={index} transaction={transaction} />
                  ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <>
  //     <h1 className="text-sm font-thin underline">Hello world!</h1>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="w-5 border-red-50">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // );
}

export default App;
