import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Searchmember } from '../model/searchmember.model';


@Injectable({
    providedIn: 'root'
})

export class SearchmemberService {
    baseUrl = 'http://localhost:5234/api/Admin/SearchUser'

    constructor(private http: HttpClient) { }

    searchmember(searchmember:any):Observable<any[]>{
        return this.http.post<any[]>(this.baseUrl,searchmember);
    }
}