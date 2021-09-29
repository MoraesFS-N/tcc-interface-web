import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterLoginComponent } from '../template/footer-login/footer-login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    FooterLoginComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule
  ]
})

export class ViewsModule { }
