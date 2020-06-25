import { Injectable } from '@angular/core';
import {LineService} from './line.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  isRandom    = true;
  canSpin     = true;
  balance     = 10;
  tempWinBal  = 0;

  reel1LandingPosition = 1;
  reel1LandingSlot = 1;
  reel2LandingPosition = 1;
  reel2LandingSlot = 1;
  reel3LandingPosition = 1;
  reel3LandingSlot = 1;


  constructor(public Line: LineService) { }

  removeBalance(value: number){
    this.balance -= value;
  }

  setBalance(value: number){
    this.balance = value;
  }

  addTempWinBal(value: number){
    this.tempWinBal += value;
  }

  getTempWinBal(){
    return this.tempWinBal;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async transferWinBalToBal(){ // Animates the transfer of win to balance
    if (this.tempWinBal === 0) {
      this.canSpin = true;
      return;
    }
    await this.sleep(1000);
    const balance = this.tempWinBal; // gets balance to adjust the speed of counting down
    for (; this.tempWinBal > 0;){
      this.tempWinBal --;
      this.balance ++;
      await this.sleep(2000 / balance);
    }
    this.canSpin = true;
    this.Line.clearLines();
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

  setMode(value: boolean){ // Sets the mode between fixed and random
    this.isRandom = value;
  }

  getMode(){
    return this.isRandom;
  }

  getReelPosition(reelNo: number){ // Gets reel position, used if the fixed mode is on
    if (reelNo === 1){
      return this.reel1LandingPosition;
    }
    if (reelNo === 2){
      return this.reel2LandingPosition;
    }
    if (reelNo === 3){
      return this.reel3LandingPosition;
    }
  }

  getReelLandingSlot(reelNo: number){ // Gets reel slot type that will land on getReelPosition position, used if the fixed mode is on
    if (reelNo === 1){
      return this.reel1LandingSlot;
    }
    if (reelNo === 2){
      return this.reel2LandingSlot;
    }
    if (reelNo === 3){
      return this.reel3LandingSlot;
    }
  }

  setReelPosition(reelNo: number, slotId: number, slotPosition: number){ // Slot position is 0-Top, 1-Mid, 2- Bot
    if (reelNo === 1){
      this.reel1LandingPosition = slotPosition;
      this.reel1LandingSlot = slotId;
    }
    if (reelNo === 2){
      this.reel2LandingPosition = slotPosition;
      this.reel2LandingSlot = slotId;
    }
    if (reelNo === 3){
      this.reel3LandingPosition = slotPosition;
      this.reel3LandingSlot = slotId;
    }
  }

}
