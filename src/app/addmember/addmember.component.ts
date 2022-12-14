import { Component, OnInit } from '@angular/core';
import { Addmember } from '../model/addmember.model';
import { AddmemberService } from '../services/addmember.service';


@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {

  constructor(private AddmemberService: AddmemberService) { }
  addmember: Addmember = {
    UserId: 0,
    UserName: '',
    FirstName: '',
    LastName: '',
    Address: '',
    City: '',
    Email: '',
    DateOfBirth: '',
    State: '',
    Physician:''

  }
  resp:any="";
  msg: any = " ";
  ngOnInit(): void {
  }

  onSubmit() {
    this.AddmemberService.addAllMember(this.addmember)
      .subscribe(
        response => {
          this.resp=response;
          console.log(this.resp);
          this.msg = "Member Added Successfuly";
        }
      );
  }

}
 

 


