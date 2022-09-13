import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { SearchmemberComponent } from './searchmember/searchmember.component';
import { SumbitclaimComponent } from './sumbitclaim/sumbitclaim.component';
import { GetallmembersComponent } from './getallmembers/getallmembers.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { MemberpageComponent } from './memberpage/memberpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddmemberComponent,
    SearchmemberComponent,
    SumbitclaimComponent,
    GetallmembersComponent,
    AdminpageComponent,
    MemberpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
