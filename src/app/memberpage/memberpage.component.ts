import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memberpage',
  templateUrl: './memberpage.component.html',
  styleUrls: ['./memberpage.component.css']
})
export class MemberpageComponent implements OnInit {

  constructor() { }
  result:any="";
  ngOnInit(): void {
    this.result=localStorage.getItem("token");
  }

}
