import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Searchmember } from '../model/searchmember.model';
import { GetAllmember } from '../model/getallmembers.model'; 


@Injectable({
    providedIn: 'root'
})

export class GetAllmemberService {
    baseUrl = 'http://localhost:5234/api/Admin/SearchUser'
    baseUrl1 = 'http://localhost:5234/api/Admin'

    constructor(private http: HttpClient) { }

    searchmember(searchmember:any):Observable<any[]>{
        return this.http.post<any[]>(this.baseUrl,searchmember);
    }

    getAllMembers(): Observable<GetAllmember[]> {
        return this.http.get<GetAllmember[]>(this.baseUrl1,
            {
                headers: new HttpHeaders({
                  'Authorization': 'Bearer ' + localStorage.getItem("token")?.toString(),
                  'Content-Type': 'application/json'
                })
              } 
            
            );
    }

}