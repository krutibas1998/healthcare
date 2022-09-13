import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addmember } from '../model/addmember.model';

@Injectable({
  providedIn: 'root'
})

export class AddmemberService {
  baseUrl = 'http://localhost:5234/api/Admin/insertUser'

  constructor(private http: HttpClient) { }

  addAllMember(member: Addmember): Observable<Addmember[]> {
    member.UserId = 0;//'00000000-0000-0000-0000-000000000000';
    return this.http.post<Addmember[]>(this.baseUrl, member,
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("token")?.toString(),
          'Content-Type': 'application/json'
        })
      }
    );
  }

}
