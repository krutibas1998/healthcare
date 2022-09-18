import { Component, OnInit } from '@angular/core';
import { Sumbitclaim } from '../model/sumbitclaim.model';
import { SumbitclaimService } from '../services/sumbitclaim.service';

@Component({
  selector: 'app-sumbitclaim',
  templateUrl: './sumbitclaim.component.html',
  styleUrls: ['./sumbitclaim.component.css']
})
export class SumbitclaimComponent implements OnInit {
  addclaim: Sumbitclaim = {
    UserId: '',
    ClaimType: '',
    ClaimAmmount: 0,
    Remarks: '',
    ClaimDate: ''
  }

  constructor(private SumbitclaimService: SumbitclaimService) { }
  result: any = "";
  ngOnInit(): void {
    this.addclaim.UserId = localStorage.getItem("memberId")?.toString();
  }

  onSubmit() {
    this.SumbitclaimService.addAllSumbitclaim(this.addclaim)
      .subscribe(
        response => {
          console.log(response);
        }
      );
  }


}
