import {Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SettingsService} from '../settings.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.sass']
})
export class DebugComponent implements OnInit{

  modeForm = new FormGroup({
    mode: new FormControl(this.Settings.getMode())
  });

  firstReelForm = new FormGroup({
    slotId: new FormControl(this.Settings.getReelLandingSlot(1)),
    position: new FormControl(this.Settings.getReelPosition(1))
  });

  secondReelForm = new FormGroup({
    slotId: new FormControl(this.Settings.getReelLandingSlot(2)),
    position: new FormControl(this.Settings.getReelPosition(2))
  });

  thirdReelForm = new FormGroup({
    slotId: new FormControl(this.Settings.getReelLandingSlot(3)),
    position: new FormControl(this.Settings.getReelPosition(3))
  });

  moneyForm = new FormGroup({
    money: new FormControl(this.Settings.getBalance(),  [
      Validators.required,
      Validators.pattern('^([+-]?[1-9]\\d*|0)$'),
      Validators.min(1),
      Validators.max(5000)
    ])
  });


  slotList = [
    {id: 1, name: '3xBAR'},
    {id: 2, name: 'BAR'},
    {id: 3, name: '2xBAR'},
    {id: 4, name: '7'},
    {id: 5, name: 'Cherry'}
  ];


  positionList = [
    {id: 0, name: 'Top'},
    {id: 1, name: 'Middle'},
    {id: 2, name: 'Bottom'}
  ];

  constructor(private formBuilder: FormBuilder,
              public Settings: SettingsService) {
  }

  ngOnInit(): void {
    this.OnChanges();
  }

  OnChanges(): void {
    this.modeForm.valueChanges.subscribe(val => {
      this.Settings.setMode(val.mode);
    });
    this.firstReelForm.valueChanges.subscribe(val => {
      this.Settings.setReelPosition(1, val.slotId, val.position);
    });
    this.secondReelForm.valueChanges.subscribe(val => {
      this.Settings.setReelPosition(2, val.slotId, val.position);
    });
    this.thirdReelForm.valueChanges.subscribe(val => {
      this.Settings.setReelPosition(3, val.slotId, val.position);
    });
  }

  setMoney(){
    this.Settings.setBalance(this.moneyForm.get('money').value);
  }
  getModeTranslation(){
    if (this.Settings.getMode()){
      return 'Random';
    } else {
      return 'Fixed';
    }
  }
}
