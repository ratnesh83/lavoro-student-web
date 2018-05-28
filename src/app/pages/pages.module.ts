import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PageHeadComponent } from './shared/page-head/page-head.component';



@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  declarations: [PagesComponent, PageHeadComponent]
})
export class PagesModule { }
