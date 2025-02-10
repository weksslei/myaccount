import { Transaction } from "./transaction.type";

export type FinanceData = {
    saldo: number;
    tradecoins: number;
    transacoes: Transaction[];
};