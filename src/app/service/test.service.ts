import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private http:HttpClient
  ) { }

  public test(){
    const url = 'http://localhost:3600/api/test';
    return this.http.get<any>(url);
  }
}
