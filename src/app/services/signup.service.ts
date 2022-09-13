import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from '../model/signup.model';

@Injectable({
    providedIn: 'root'
})

export class userService {
    baseUrl = 'http://localhost:5234/api/userRegistration/insertUser';
    constructor(private http: HttpClient) { }

    addUser(signup: Signup): Observable<Signup[]> {
        return this.http.post<Signup[]>(this.baseUrl, signup);
    }
}