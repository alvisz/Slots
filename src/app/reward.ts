import {SettingsService} from './settings.service';
import {Injectable} from '@angular/core';
import {LineService} from './line.service';

@Injectable({
  providedIn: 'root'
})

export class Reward {

  constructor(public Settings: SettingsService,
              public Line: LineService) {}

  public calculateReward(lines){
    let lineNo = 0;
    for ( const line of lines){
      const isFullLine = this.checkIfFullLine(line);
      if (isFullLine){
        this.Line.fillLine(lineNo);
        if (line[0] !== 5){
          this.Settings.addTempWinBal(this.combinationOf3AnyLine(line[0]));
        } else {
          this.Settings.addTempWinBal(this.threeCherries(lineNo));
        }
      } else {
        if (this.threeRandomBars(line)){
          this.Line.fillLine(lineNo);
          this.Settings.addTempWinBal(5); // Adds 5 to temp win balance if there are three random bars
        }
        if (this.cherryAndSevenCombo(line)){
          this.Line.setLineStatus(lineNo, 0, true);
          this.Line.setLineStatus(lineNo, 1, true);
          this.Settings.addTempWinBal(75);
        }
      }
      lineNo++;
    }
  }



  private checkIfFullLine(line){
    if (line[0] === line[1] && line[0] === line[2]){
      return true;
    }
    return false;
  }


  private combinationOf3AnyLine(id: number){
    switch (id) {
      case 1: // If 3xBar
        return 50;
      case 2:
        return 10; // If 1xBar
      case 3:
        return 20; // If 2xBar
      case 4:
        return 150; // If 3x7s
      default:
        return 0;
    }
  }
  private threeCherries(linePosition: number){ // Returns reward of 3 cherries in line depending on which line they are e.g. 0,1,2
    switch (linePosition) {
      case 0:
        return 2000;
      case 1:
        return 1000;
      case 2:
        return 4000;
      default:
        return 0;
    }
  }

  private threeRandomBars(line){ // Checks if exact line has combination of 3 random bar symbols
    /* 1 - 3xBar
       2 - 1xBar
       3 - 2xBar
    */
    if (!line.includes(4)) {
      if (!line.includes(5)) {
          return true;
      }
    } else {
      return false;
    }
  }

  private cherryAndSevenCombo(line){ // Checks if exact lines first two positions has combination of cherry and Seven
    /*
    4 - Seven
    5 - Cherry
    */
    if (line[0] === 4){
      if (line[1] === 5){ return true; }
    }
    if (line[0] === 5){
      if (line[1] === 4){ return true; }
    }
    return false;
  }

}
