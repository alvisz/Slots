import { Component, OnInit } from '@angular/core';
import {LineService} from '../line.service';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.sass']
})
export class LinesComponent implements OnInit {

  constructor(public Line: LineService) { }

  ngOnInit(): void {
  }

}
