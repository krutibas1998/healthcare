import { Component, OnInit } from '@angular/core';
import { Signup } from '../model/signup.model';
import { userService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup: Signup = {
    UserName: '',
    UserType: '',
    Password: ''
  }

  constructor(private userService: userService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.signup.UserName !== '') {
      this.userService.addUser(this.signup)
        .subscribe(
          response => {
            console.log(response);
            this.signup = {
              UserName: '',
              UserType: '',
              Password: ''
            };
          }
        );
    } else {
      console.log('Login failed');
    }
  }

}
