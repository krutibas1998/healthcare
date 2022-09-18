import { Component, OnInit } from '@angular/core';
import { Memberdetails } from '../model/memberdetails.model';
import { MemberdetailsService } from '../services/memberdetails.service';

@Component({
  selector: 'app-memeberdetails',
  templateUrl: './memeberdetails.component.html',
  styleUrls: ['./memeberdetails.component.css']
})
export class MemeberdetailsComponent implements OnInit {

  memberdetails: Memberdetails = {
    UserId: 0
  }
  repo: any = {};
  resp: any = {};

  constructor(private MemberdetailsService: MemberdetailsService) { }
  result: any = "";
  ngOnInit(): void {
    this.result = localStorage.getItem("token");

  }

  onSubmit(): void {
    this.MemberdetailsService.searchmember(this.memberdetails).subscribe(response => {
      this.resp = response;
      console.log(this.resp)
      localStorage.setItem("memberId", this.resp[0].memberId);
      localStorage.getItem("memberId")?.toString();
      localStorage.getItem("token");

    });
  }

}
