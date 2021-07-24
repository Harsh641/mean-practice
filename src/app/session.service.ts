import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient:HttpClient) { }

  saveUser(data:User){
    let url = "http://restapi2020.herokuapp.com/api/users.json"
    return this.httpClient.post(url, data)
  }

  authenticate(email:string, password:string):Observable<any>{
    let url = "http://restapi2020.herokuapp.com/api/login.json"
    let data = {"email":email, "password":password}
    return this.httpClient.post(url, data)
  }
}
