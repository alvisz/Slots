import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { ReelComponent } from './reel/reel.component';

@NgModule({
  declarations: [
    AppComponent,
    ReelComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
