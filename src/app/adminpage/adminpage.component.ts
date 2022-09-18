import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor() { }
  result: any = "";
  ngOnInit(): void {
    this.result = localStorage.getItem("token");
  }
  getValue(): any {
    return localStorage.getItem("userName")?.toString();
  }
}
