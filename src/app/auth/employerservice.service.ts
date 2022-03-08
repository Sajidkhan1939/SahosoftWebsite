import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployerserviceService {
  url="http://localhost:54868/";

  constructor(private http:HttpClient) { }
  createemployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.url+'api/Employeemasters',employee)
  }
}
