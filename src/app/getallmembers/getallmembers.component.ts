import { Component, OnInit } from '@angular/core';
import { GetAllmemberService } from '../services/getallmembers.service'; 
import { GetAllmember } from '../model/getallmembers.model';
import { Searchmember } from '../model/searchmember.model';

@Component({
  selector: 'app-getallmembers',
  templateUrl: './getallmembers.component.html',
  styleUrls: ['./getallmembers.component.css']
})
export class GetallmembersComponent implements OnInit {
  addmembers:GetAllmember[]=[];
  addmember: GetAllmember = {
    userId: 0,
    userName: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    email: '',
    dateOfBirth: '',
    state: '',
    physician:'',
    claimAmmount:0,
    claimDate:'',
    claimId:'',
    

  }
  
  searchmember: Searchmember = {
    UserId:0
  }
  resp: any = {};
  constructor(private GetAllmemberService:GetAllmemberService) { }
  result:any="";
  ngOnInit(): void {
    this.getAllMembers();
    this.result=localStorage.getItem("token");
  }

  getAllMembers() {
    this.GetAllmemberService.getAllMembers()
    .subscribe(
      response => { this.addmembers = response
        // localStorage.setItem("memberId", this.resp[0].userId);
        // localStorage.getItem("memberId")?.toString();
      }
      
    );
  }


  onSubmit(): void {
    this.GetAllmemberService.searchmember(this.searchmember).subscribe(response => {
      this.resp = response;
      console.log(this.resp)
      localStorage.setItem("memberId", this.resp[0].memberId);
      localStorage.getItem("memberId")?.toString();
      // console.log(localStorage.getItem("UserId")?.toString());
     

      
    });
  }

}
