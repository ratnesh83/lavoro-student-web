import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicPagesComponent } from './public-pages.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '',
        component: PublicPagesComponent,
        children:[
            {path:'',redirectTo:'home'},
            {path:'home',loadChildren:'./home/home.module#HomeModule'},
            {path:'about-us',component: AboutUsComponent},
            {path:'contact-us',component: ContactUsComponent},
            {path:'register',component: RegisterComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PublicPagesRoutingModule{
    
}