import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { SearchmemberComponent } from './searchmember/searchmember.component';
import { SumbitclaimComponent } from './sumbitclaim/sumbitclaim.component';
import { GetallmembersComponent } from './getallmembers/getallmembers.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { MemberpageComponent } from './memberpage/memberpage.component';
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"addmember", component:AddmemberComponent},
  {path:"searchmember", component:SearchmemberComponent},
  {path:"addclaim", component:SumbitclaimComponent},
  {path:"getallmembers", component:GetallmembersComponent},
  {path:"adminpage", component:AdminpageComponent},
  {path:"memberpage", component:MemberpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
