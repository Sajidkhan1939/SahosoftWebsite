import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
  {path:'registration', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
