import {FinanceData } from '../types/finance-data.type';

export const mockData: FinanceData ={
    saldo: 15.00 ,
    tradecoins: 1257,
    transacoes: [
        {
            data: "09/02/2025, 14:23",
            valor:1235,
            saldo: 1.557,
            informacao: "T$ Diário - 82",
            tipo: "Recompensa diária"
        },
        {
            data: "09/02/2025, 13:15",
            valor:4125,
            saldo: 40.00,
            informacao: "Conta Safe 25",
            tipo: "Abertura Conta Safe"
        },
        {
            data: "09/02/2025, 13:15",
            valor:1235,
            saldo: 40.00,
            informacao: "Conta Safe 25",
            tipo: "Premiação Conta Safe"
        },
        {
            data: "09/02/2025, 11:30",
            valor:2132,
            saldo: 157.41,
            informacao: "T$ Diário - 82",
            tipo: "Recompensa diária"
        },
        {
            data: "09/02/2025, 10:45",
            valor:1235,
            saldo: -520.00,
            informacao: "Conta Safe 24",
            tipo: "Abertura Conta Safe"
        },
        {
            data: "09/02/2025, 10:45",
            valor:-355,
            saldo: 40.00,
            informacao: "Conta Safe 24",
            tipo: "Premiação Conta Safe"
        },
        {
            data: "09/02/2025, 09:15",
            valor:165,
            saldo: 3500.45,
            informacao: "T$ Diário - 82",
            tipo: "Recompensa diária"
        }
    ]
};