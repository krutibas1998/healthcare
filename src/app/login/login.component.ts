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
  response: any;
  resp: any;
  login: Login = {
    UserName: "",
    Password: "",
    userType: ""
  }


  constructor(private LoginService: LoginService, private router: Router) { }
  mes: any = "";
  ngOnInit(): void {
  }

  onSumbit() {

    if (this.login.UserName != '' && this.login.Password != '') {
      this.LoginService.addUser(this.login)
        .subscribe(
          response => {
            this.resp = response;
            console.log(response);
            if (this.resp.token == "Invalid Credentials") {
              console.log('Login failed');
              this.mes = "Invalid UserName & Password";
              return;
            }

            console.log(this.resp.UserType);
            if (this.resp.role == "admin" || this.resp.role == "member")
              this.LoginService.addUser(this.login).subscribe(response => {
                this.resp = response;
                localStorage.setItem("token", this.resp.token);
                if (this.resp.role == "admin") {
                  localStorage.setItem("userName", this.login.UserName);

                  this.router.navigate(["/adminpage"]);
                }
                else {
                  localStorage.setItem("userName", this.login.UserName);
                  this.router.navigate(["/memberpage"]);
                }
              });

          }
        )
    }
    else {

      console.log('Login failed');
      this.mes = "Invalid UserName & Password";
      return;
    }
  }

}
