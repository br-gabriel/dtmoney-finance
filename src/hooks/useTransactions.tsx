import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
    children: ReactNode; //Aceita qualquer tipo de conteúdo válido
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
); //Valor padrão

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    useEffect(() => {
        // api.get('transactions')
        // .then(response => setTransactions(response.data.transactions))

        const savedData = localStorage.getItem('transactions')
        if (savedData) {
            setTransactions(JSON.parse(savedData))
        }
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
       const response = await api.post('/transactions', {
           ...transactionInput,
           createdAt: new Date(),
       })
       const { transaction } = response.data

       setTransactions([
           ...transactions,
           transaction,
       ]);
    }

    localStorage.setItem('transactions', JSON.stringify(transactions));

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context;
}