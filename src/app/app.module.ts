import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { ReelComponent } from './reel/reel.component';
import {SettingsService} from './settings.service';
import { DebugComponent } from './debug/debug.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ReelComponent,
    DebugComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModule,
        MatButtonModule,
        MatDialogModule
    ],
  entryComponents: [DebugComponent],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
