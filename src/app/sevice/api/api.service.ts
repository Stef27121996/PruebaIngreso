import { Injectable } from '@angular/core';

import {LoginI} from '../../Models/login.interface';
import { ResponseI } from '../../Models/response.interface';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://api.github.com/users/"

  constructor(private http:HttpClient) { }

  loginByName(form: LoginI):Observable<ResponseI>{
    let direccion = this.url.concat(form.usuario);
    return this.http.post<ResponseI>(direccion,form)
  }
}
