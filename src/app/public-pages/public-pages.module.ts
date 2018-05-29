import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPagesComponent } from './public-pages.component';
import { PublicPagesRoutingModule } from './public-pages-routing.module';
import { HeadComponent } from './shared/head/head.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule, MatSelectModule, MatCheckboxModule, MatButtonModule, MatCardModule, MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginDialog } from './popups/login/login.component';



@NgModule({
  imports: [
    CommonModule,
    PublicPagesRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
  ],
  entryComponents: [
    LoginDialog
  ],
  declarations: [PublicPagesComponent, HeadComponent, AboutUsComponent, ContactUsComponent, RegisterComponent, LoginDialog]
})
export class PublicPagesModule { }
