import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{PageComponent} from './page/page.component';
import{ContactUsComponent} from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'page/:slug', component:PageComponent},
  {path:'contact-us', component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }
