import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  isRandom = false;
  balance = 0;


  constructor() { }


  addBalance(value: number){
    this.balance += value;
  }

  getBalance(){
    return this.balance;
  }


}
