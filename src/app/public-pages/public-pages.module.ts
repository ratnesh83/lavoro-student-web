import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPagesComponent } from './public-pages.component';
import { PublicPagesRoutingModule } from './public-pages-routing.module';
import { FootComponent } from './shared/foot/foot.component';
import { HeadComponent } from './shared/head/head.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';




@NgModule({
  imports: [
    CommonModule,
    PublicPagesRoutingModule
  ],
  declarations: [PublicPagesComponent, FootComponent, HeadComponent, AboutUsComponent, ContactUsComponent, RegisterComponent]
})
export class PublicPagesModule { }
