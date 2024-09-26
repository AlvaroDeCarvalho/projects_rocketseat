import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction{
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createAt: string;
  }

interface TrasanctionContextType {
    transactions: Transaction[];
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext<TrasanctionContextType>({} as TrasanctionContextType) 

export const TransactionProvider = ({children}: TransactionProviderProps) => {

  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/transactions')
       setTransactions(await response.json())
    }
    fetchData()
  }, [])

    return (
        <TransactionsContext.Provider value={{transactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}