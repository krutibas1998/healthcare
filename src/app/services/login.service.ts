import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    baseUrl = 'http://localhost:5100/api/Authentication'

    constructor(private http: HttpClient) { }

    addUser(login: Login): Observable<Login[]> {

        return this.http.post<Login[]>(this.baseUrl, login);
  
        
    }
}