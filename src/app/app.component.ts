import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Slots';

  slotList = [
    {id: 1, src: './assets/Reel/3xBAR.png'},
    {id: 2, src: './assets/Reel/BAR.png'},
    {id: 3, src: './assets/Reel/2xBAR.png'},
    {id: 4, src: './assets/Reel/7.png'},
    {id: 5, src: './assets/Reel/Cherry.png'}
  ];

  spin() {
    let tempSlot = this.slotList[this.slotList.length -1];
    this.slotList.splice(-1, 1);
    this.slotList = [tempSlot, ...this.slotList];
  }
}
