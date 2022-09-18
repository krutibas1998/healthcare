import { Component, OnInit } from '@angular/core';
import { Searchmember } from '../model/searchmember.model';
import { SearchmemberService } from '../services/searchmember.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchmember',
  templateUrl: './searchmember.component.html',
  styleUrls: ['./searchmember.component.css']
})
export class SearchmemberComponent implements OnInit {


  searchmember: Searchmember = {
    UserId: 0
  }
  repo: any = {};
  resp: any = {};
  constructor(private SearchmemberService: SearchmemberService, private router: Router) { }
  result: any = "";
  ngOnInit(): void {
    this.result = localStorage.getItem("token");
  }


  onSubmit(): void {
    this.SearchmemberService.searchmember(this.searchmember).subscribe(response => {
      this.resp = response;
      console.log(this.resp)
      localStorage.setItem("memberId", this.resp[0].memberId);
      localStorage.getItem("memberId")?.toString();
      localStorage.getItem("token");

    });
  }
}
