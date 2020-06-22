import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Slots';

  imageList = [
    {id: 1, src: './assets/Reel/3xBAR.png'},
    {id: 2, src: './assets/Reel/BAR.png'},
    {id: 3, src: './assets/Reel/2xBAR.png'},
    {id: 4, src: './assets/Reel/7.png'},
    {id: 5, src: './assets/Reel/Cherry.png'}
  ];

  shuffleArray = arr => arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])

  shuffle(){
    this.imageList = this.shuffleArray(this.imageList);
    console.log(this.imageList)
  }
}
