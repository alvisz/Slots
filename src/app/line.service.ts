import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  constructor() { }
  firstLineFirst    = false;
  firstLineSecond   = false;
  firstLineThird    = false;
  secondLineFirst   = false;
  secondLineSecond  = false;
  secondLineThird   = false;
  thirdLineFirst    = false;
  thirdLineSecond   = false;
  thirdLineThird    = false;


  getLineStatus(line: number, position: number){
    if (line === 0){
      if (position === 0){
        return this.firstLineFirst;
      }
      if (position === 1){
        return this.firstLineSecond;
      }
      if (position === 2){
        return this.firstLineThird;
      }
    }
    if (line === 1){
      if (position === 0){
        return this.secondLineFirst;
      }
      if (position === 1){
        return this.secondLineSecond;
      }
      if (position === 2){
        return this.secondLineThird;
      }
    }
    if (line === 2){
      if (position === 0){
        return this.thirdLineFirst;
      }
      if (position === 1){
        return this.thirdLineSecond;
      }
      if (position === 2){
        return this.thirdLineThird;
      }
    }
  }

  setLineStatus(line: number, position: number, value: boolean){
    if (line === 0){
      if (position === 0){
        this.firstLineFirst   = value;
      }
      if (position === 1){
        this.firstLineSecond  = value;
      }
      if (position === 2){
        this.firstLineThird   = value;
      }
    }
    if (line === 1){
      if (position === 0){
        this.secondLineFirst  = value;
      }
      if (position === 1){
        this.secondLineSecond = value;
      }
      if (position === 2){
        this.secondLineThird  = value;
      }
    }
    if (line === 2){
      if (position === 0){
        this.thirdLineFirst   = value;
      }
      if (position === 1){
        this.thirdLineSecond  = value;
      }
      if (position === 2){
        this.thirdLineThird   = value;
      }
    }
  }

  fillLine(line: number){
    if (line === 0){
      this.firstLineFirst     = true;
      this.firstLineSecond    = true;
      this.firstLineThird     = true;
    }
    if (line === 1){
      this.secondLineFirst    = true;
      this.secondLineSecond   = true;
      this.secondLineThird    = true;
    }
    if (line === 2){
      this.thirdLineFirst     = true;
      this.thirdLineSecond    = true;
      this.thirdLineThird     = true;
    }
  }

  clearLines(){
    this.firstLineFirst    = false;
    this.firstLineSecond   = false;
    this.firstLineThird    = false;
    this.secondLineFirst   = false;
    this.secondLineSecond  = false;
    this.secondLineThird   = false;
    this.thirdLineFirst    = false;
    this.thirdLineSecond   = false;
    this.thirdLineThird    = false;
  }
}
