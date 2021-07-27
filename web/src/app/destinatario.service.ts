import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable , Observer} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DestinatarioService {

  constructor(private http:HttpClient) { }


  postData(data:any):Observable<any>{
        return this.http.post('http://127.0.0.1:3050/add', data);
  }


  listaBancos():Observable<any>{
    return this.http.get('http://127.0.0.1:3050/listaBancos');
  }


  buscaDestinatarios():Observable<any>{
    return this.http.get('http://127.0.0.1:3050/customers');
  }

  buscaDestinatario(id:any):Observable<any>{
    return this.http.get('http://127.0.0.1:3050/customers/'+id);
  }


  postTransaccion(body:any):Observable<any>{
    return this.http.post('http://127.0.0.1:3050/transaccion/', body);
  }


  getLstadeTransaccion():Observable<any>{
    return this.http.get('http://127.0.0.1:3050/listaTrans');
  }
}
