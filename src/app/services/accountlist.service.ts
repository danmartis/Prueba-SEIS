import { Injectable } from '@angular/core';
import { Account } from '../models/accountlist';
import { AuthenticationService } from './authentication.service';
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpHeaders ,} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountlistService {


listAccount: any;
URL_BASE = "http://api-erp-dev.medinet.cl";


constructor(public http: HttpClient, public auth: AuthenticationService) { }



getlist(){

  //If autenticated:
  if(this.auth.authenticated){

  //  cabecera de la solicitud GET en cuentas api, pasando parametros de contenido, formato json, Token, contiene la sesion autenticada del usuario
   const Send_Token = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + this.auth.userCurrent.key
    })
  }
  // Observable con Objeto obtenido mediante tuberia para responses de angular 6 
  return this.http.get(this.URL_BASE + '/contabilidad/plan-cuentas/cuenta/max-level/', Send_Token).pipe(map((response: any) => response))
}

  }


}