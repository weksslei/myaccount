import { Component } from '@angular/core';
import { Transaction } from '../types/transaction.type';
import { mockData } from './mockData.data';



@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})


export class MyAccountComponent {
  saldo: number = mockData.saldo;
  tradeCoins: number = mockData.tradecoins;
  valorDeposito: number = 0;
  valorResgate: number = 0;
  codigoCupom: string = '';
  filtro: string = '';
  periodo: string = '';
  transacao: Transaction[]  = mockData.transacoes ;


  extrato: Transaction[] = mockData.transacoes.map(t => ({
    data: t.data.split(',')[0],
    valor: t.valor,
    saldo: t.saldo,
    tipo: t.tipo,
    informacao: t.informacao
  }));

  extratoFiltrado: Transaction[] = [...this.extrato];


  private extractNumberFromValue(value: string): number {
    const numericValue = value.replace(/[^0-9.-]/g, '');
    return parseFloat(numericValue);
  }

  depositar() {
    if (this.valorDeposito > 0) {
      this.saldo += this.valorDeposito;
      const novaTransacao: Transaction = {
        data: new Date().toLocaleDateString(),
        valor: this.valorDeposito,
        saldo: this.saldo,
        tipo: 'Depósito',
        informacao: `Depósito via PIX`
      };
      this.extrato.unshift(novaTransacao);
      this.valorDeposito = 0;
      this.atualizarExtrato();
    }
  }

  resgatar() {
    if (this.valorResgate > 0 && this.valorResgate <= this.saldo) {
      this.saldo -= this.valorResgate;
      const novaTransacao: Transaction = {
        data: new Date().toLocaleDateString(),
        valor: -this.valorResgate,
        saldo: this.saldo,
        tipo: 'Resgate',
        informacao: `Resgate via PIX`
      };
      this.extrato.unshift(novaTransacao);
      this.valorResgate = 0;
      this.atualizarExtrato();
    }
  }

  validarCupom() {
    if (this.codigoCupom) {
      this.tradeCoins += 500;
      const novaTransacao: Transaction = {
        data: new Date().toLocaleDateString(),
        valor: 500,
        saldo: this.tradeCoins,
        tipo: 'Cupom',
        informacao: `Resgate de cupom: ${this.codigoCupom}`
      };
      this.extrato.unshift(novaTransacao);
      this.atualizarExtrato();
    }
    this.codigoCupom = '';
  }

  atualizarExtrato() {
    this.filtrarTransacoes();
  }

  filtrarTransacoes() {
    if (this.filtro === 'todos') {
      this.extratoFiltrado = [...this.extrato];
    } else {
      this.extratoFiltrado = this.extrato.filter(t => 
        this.filtro === 'deposito' ? t.valor > 0 : t.valor < 0
      );
    }
  }

  filtrarPorPeriodo() {
    if (this.periodo) {
      const [dataInicio, dataFim] = this.periodo.split(' - ').map(date => new Date(date));
      this.extratoFiltrado = this.extrato.filter(t => {
        const dataTransacao = new Date(this.formatarData(t.data));
        return dataTransacao >= dataInicio && dataTransacao <= dataFim;
      });
    }
  }

  private formatarData(data: string): string {
    const [dia, mes, ano] = data.split('/');
    return `${ano}-${mes}-${dia}`;
  }

  exibirSimbolo(transacao: Transaction): boolean {
    return !transacao.informacao.includes('Conta Safe');
  }
}