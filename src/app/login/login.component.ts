import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response:any;
  resp: any;
  login: Login = {
    UserName:"",
    Password:"",
    userType:""
  }

  constructor(private LoginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  onSumbit() {
    debugger;
    if (this.login.UserName != '' && this.login.Password != '') {
      this.LoginService.addUser(this.login)
        .subscribe(
          response => {
            this.resp = response;
            console.log(response);
            localStorage.setItem("token", this.resp.token);
            console.log(localStorage.getItem("token"));
            console.log(this.resp.UserType);
            if(this.resp.role=="admin" || this.resp.role =="member")
            this.LoginService.addUser(this.login).subscribe(response=>{
              this.resp=response;
              localStorage.setItem("token", this.resp.token);
              if(this.resp.role=="admin")
                {
                  this.router.navigate(["/adminpage"]);
                }
                else
                  {
                    this.router.navigate(["/memberpage"]);
                  }
            });
            // {
            //   localStorage.setItem("token", this.resp.token);
            //   if(this.resp.userType=="admin")
            //   {
            //     this.router.navigate(["/adminpage"]);
                
            //   }
            //   else
            //   {
            //     this.router.navigate(["/memberpage"]);
            //   }
            // }

          }
        )
    } else {
      console.log('Login failed');
    }
  }

}
