import {Component, Input, OnInit} from '@angular/core';


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

  canSpin = true; // Variable for disabling spin button when reels are spinning


  constructor() { }



  ngOnInit(): void {
    this.spin();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getRandomNumber() {
    return Math.floor(Math.random() * Math.floor(5)) + 1; // Gets random number from 1 to 5
  }

  async spinReel1(timeout){
    await this.sleep(timeout);
    const until = 2000 + Number(timeout);
    const ms = until / (250 + this.getRandomNumber()); // How many ms per spin
    for (let i = 0; i < until; i += ms){
      const tempSlot = this.reel1List[this.reel1List.length - 1];
      this.reel1List.splice(-1, 1);
      this.reel1List = [tempSlot, ...this.reel1List];
      await this.sleep(ms);
    }
  }

  async spinReel2(timeout){
    await this.sleep(timeout);
    const until = 2000 + Number(timeout);
    const ms = until / (250 + this.getRandomNumber()); // How many ms per spin
    for (let i = 0; i < until; i += ms){
      const tempSlot = this.reel2List[this.reel2List.length - 1];
      this.reel2List.splice(-1, 1);
      this.reel2List = [tempSlot, ...this.reel2List];
      await this.sleep(ms);
    }
  }

  async spinReel3(timeout){
    await this.sleep(timeout);
    const until = 2000 + Number(timeout);
    const ms = until / (250 + this.getRandomNumber()); // How many ms per spin
    for (let i = 0; i < until; i += ms){
      const tempSlot = this.reel3List[this.reel3List.length - 1];
      this.reel3List.splice(-1, 1);
      this.reel3List = [tempSlot, ...this.reel3List];
      await this.sleep(ms);
    }
  }

  spin(){
    this.canSpin = false;
    const reel1Promise = this.spinReel1(0);
    const reel2Promise = this.spinReel2(500);
    const reel3Promise = this.spinReel3(1000);
    Promise.all([reel1Promise, reel2Promise, reel3Promise]).then(value => {
      console.log('done');
      this.canSpin = true;
    });

  }

}
