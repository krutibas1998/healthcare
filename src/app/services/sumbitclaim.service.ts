import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sumbitclaim } from '../model/sumbitclaim.model';

@Injectable({
  providedIn: 'root'
})

export class SumbitclaimService {
  baseUrl = 'http://localhost:5234/api/Admin/insertClaim'

  constructor(private http: HttpClient) { }

  addAllSumbitclaim(member: Sumbitclaim): Observable<Sumbitclaim[]> {
    return this.http.post<Sumbitclaim[]>(this.baseUrl, member,
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("memberId")?.toString(),
          'Content-Type': 'application/json'
        })
      }
    );
  }

}