import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DahsboardModule } from './dahsboard/dahsboard.module';
import {InputTextModule} from 'primeng/inputtext';
import { LoginComponent } from './login/login.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DahsboardModule,
    BrowserAnimationsModule,
    InputTextModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
