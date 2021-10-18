import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Url, User } from './model';

@Injectable({
  providedIn: 'root'
})
export class ShortenerService {
  serverUrl = '//localhost:8080';
  userData:Array<User> = [];
  constructor(private http:HttpClient) { }

  saveUser(user:User){
    return this.http.post(`https://6162fa11c4833800173007c7.mockapi.io/user`,user)
  }

  getAllUser(){
    return this.http.get<Array<User>>(`https://6162fa11c4833800173007c7.mockapi.io/user`)
  }

  getUserByID(id?:number){
    return this.http.get<User>(`https://6162fa11c4833800173007c7.mockapi.io/user/${id}`)
  }

  updateUserById(userId:number,userdata:User){
    return this.http.put(`https://6162fa11c4833800173007c7.mockapi.io/user/${userId}`,userdata)
  }

  deleteUserById(id?:number){
    return this.http.delete(`https://6162fa11c4833800173007c7.mockapi.io/user/${id}`)
  }

  saveUrl(data:Url){
    return this.http.post(`https://6162fa11c4833800173007c7.mockapi.io/url`,data);
  }

  getAll(){
    return this.http.get<Array<Url>>(`https://6162fa11c4833800173007c7.mockapi.io/url`);
  }

  update(data:Url,id:number|undefined){
    return this.http.put(`https://6162fa11c4833800173007c7.mockapi.io/url/${id}`,data);
  }

}
