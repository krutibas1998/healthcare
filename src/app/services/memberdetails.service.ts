import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Memberdetails } from '../model/memberdetails.model';


@Injectable({
    providedIn: 'root'
})

export class MemberdetailsService {
    baseUrl = 'http://localhost:5234/api/Admin/SearchUser'

    constructor(private http: HttpClient) { }

    searchmember(searchmember: any): Observable<any[]> {
        return this.http.post<any[]>(this.baseUrl, searchmember);
    }
}