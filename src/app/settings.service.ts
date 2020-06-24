import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  isRandom = false;
  canSpin = true;
  balance = 10;
  tempWinBal = 0;


  constructor() { }


  addBalance(value: number){
    this.balance += value;
  }

  removeBalance(value: number){
    this.balance -= value;
  }

  setBalance(value: number){
    this.balance = value;
  }

  addTempWinBal(value: number){
    console.log('Value added: ' + value);
    this.tempWinBal += value;
  }

  getTempWinBal(){
    return this.tempWinBal;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async transferWinBalToBal(){
    if (this.tempWinBal === 0) {
      this.canSpin = true;
      return;
    }
    await this.sleep(1000);
    const balance = this.tempWinBal; // gets balance to adjust the speed of counting down
    for (; this.tempWinBal > 0;){
      console.log(this.tempWinBal);
      this.tempWinBal --;
      this.balance ++;
      await this.sleep(2000 / balance);
    }
    this.canSpin = true;
  }

  getBalance(){
    return this.balance;
  }

  setCanSpin(value: boolean){
    this.canSpin = value;
  }

  getCanSpin(){
    if (this.balance === 0){
      return false;
    } else {return this.canSpin; }
  }



}
