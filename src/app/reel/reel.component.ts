import {Component, Input, OnInit} from '@angular/core';
import {SettingsService} from '../settings.service';
import {DebugComponent} from '../debug/debug.component';
import {MatDialog} from '@angular/material/dialog';
import {Reward} from '../reward';
import {LineService} from '../line.service';


@Component({
  selector: 'app-reel',
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.sass']
})
export class ReelComponent implements OnInit {

  reel1List = [
    {id: 1, src: './assets/Reel/3xBAR.png'},
    {id: 2, src: './assets/Reel/BAR.png'},
    {id: 3, src: './assets/Reel/2xBAR.png'},
    {id: 4, src: './assets/Reel/7.png'},
    {id: 5, src: './assets/Reel/Cherry.png'}
  ];
  reel2List = [...this.reel1List];
  reel3List = [...this.reel1List];

  boardArray = null; /* 2D Array of 3 arrays after spin, each array represents one line.
                        Example: [1,1,1],[2,2,2],[3,3,3]
                        Numbers are id's from reel1List
                     */


  constructor(public Settings: SettingsService,
              public dialog: MatDialog,
              private Rewards: Reward) { }




  ngOnInit(): void {
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getMagicNumber(reelNo: number) {
    if (this.Settings.getMode()){
      return Math.floor(Math.random() * Math.floor(5)) + 1; // Gets random number from 1 to 5
    } else {
      return this.Settings.getReelLandingSlot(reelNo); // If fixed mode, takes values from Settings service
    }
  }

  async spinReel1(timeout){
    await this.sleep(timeout);
    const until = 2000 + Number(timeout); // Time how long reel should spin
    const ms = until / (250 + this.getMagicNumber(1)); // How many ms per spin
    for (let i = 0; i < until; i += ms){
      const tempSlot = this.reel1List[this.reel1List.length - 1];
      this.reel1List.splice(-1, 1);
      this.reel1List = [tempSlot, ...this.reel1List];
      await this.sleep(ms);
    }
    if (!this.Settings.getMode()){ // Checks if fixed mode is off
      while (this.reel1List[this.Settings.getReelPosition(1)].id !== this.getMagicNumber(1)){
        const tempSlot = this.reel1List[this.reel1List.length - 1];
        this.reel1List.splice(-1, 1);
        this.reel1List = [tempSlot, ...this.reel1List];
      }
    }
  }

  async spinReel2(timeout){
    await this.sleep(timeout);
    const until = 2000 + Number(timeout); // Time how long reel should spin
    const ms = until / (250 + this.getMagicNumber(2)); // How many ms per spin
    for (let i = 0; i < until; i += ms){
      const tempSlot = this.reel2List[this.reel2List.length - 1];
      this.reel2List.splice(-1, 1);
      this.reel2List = [tempSlot, ...this.reel2List];
      await this.sleep(ms);
    }
    if (!this.Settings.getMode()){ // Checks if fixed mode is off
      while (this.reel2List[this.Settings.getReelPosition(2)].id !== this.getMagicNumber(2)){
        const tempSlot = this.reel2List[this.reel2List.length - 1];
        this.reel2List.splice(-1, 1);
        this.reel2List = [tempSlot, ...this.reel2List];
      }
    }
  }

  async spinReel3(timeout){
    await this.sleep(timeout);
    const until = 2000 + Number(timeout); // Time how long reel should spin
    const ms = until / (250 + this.getMagicNumber(3)); // How many ms per spin
    for (let i = 0; i < until; i += ms){
      const tempSlot = this.reel3List[this.reel3List.length - 1];
      this.reel3List.splice(-1, 1);
      this.reel3List = [tempSlot, ...this.reel3List];
      await this.sleep(ms);
    }
    if (!this.Settings.getMode()){ // Checks if fixed mode is off
      while (this.reel3List[this.Settings.getReelPosition(3)].id !== this.getMagicNumber(3)){
        const tempSlot = this.reel3List[this.reel3List.length - 1];
        this.reel3List.splice(-1, 1);
        this.reel3List = [tempSlot, ...this.reel3List];
      }
    }
  }


  spin(){
    this.Settings.removeBalance(1);
    this.Settings.setCanSpin(false);
    const reel1Promise = this.spinReel1(0);
    const reel2Promise = this.spinReel2(500);
    const reel3Promise = this.spinReel3(1000);
    Promise.all([reel1Promise, reel2Promise, reel3Promise]).then(value => {
      this.boardArray = [ [this.reel1List[0].id, this.reel2List[0].id, this.reel3List[0].id],
                          [this.reel1List[1].id, this.reel2List[1].id, this.reel3List[1].id],
                          [this.reel1List[2].id, this.reel2List[2].id, this.reel3List[2].id]]; // Could have used For cycle,
                                                                                              // but this is easier to understand
      this.Rewards.calculateReward(this.boardArray);
      this.Settings.transferWinBalToBal(); // Makes that satisfying counting animation on win
    });
  }


  newGame(){
    this.Settings.setCanSpin(true);
    this.Settings.setBalance(10);
  }

  openDebug(){
    this.dialog.open(DebugComponent, {
      width: '650px'
    });
  }

}
