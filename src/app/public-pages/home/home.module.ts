import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule} from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
