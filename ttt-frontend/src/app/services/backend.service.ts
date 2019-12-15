import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "http://localhost:3000/ttt";

  getList(n: number) {
    return this.http.get(this.baseUrl + '/' + n);
  }
}
