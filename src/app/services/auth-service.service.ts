import { Injectable } from '@angular/core';

import { HttpClient  } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Route, Router } from '@angular/router';
@Injectable()
export class AuthServiceService {

  helper = new JwtHelperService();
  constructor(private http: HttpClient, private router:Router) { }
  login(email:any,pass:any ) {
    console.log(2)
    this.setSession()
   
    
}
setSession(){

  localStorage.setItem('session','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjEyMzEyMzMzMjQyfQ.Dr0QluIh0RJPkfyZN8THBpM19CYV387xEy_Mk3jBo1Y')
 }
// public isLoggedIn() {
//   return this.autenticado();
// }
// isTokenExpired(token?: string): boolean {
 
//   if (!token) {
//     token = this.getToken();
    
//   }
//   if (!token) {
//     return true;
//   }
//   const date = this.getTokenExpirationDate(token);
  
//   if (date === undefined || date == null) {
//     return false;
//   }

//   return !(date.valueOf() > new Date().valueOf());
// }
// getToken(): string {
//   if (localStorage.getItem('session') != null) {
//     return localStorage.getItem('session')!;
//   } else {
//     return '';
//   }
// }
// getTokenExpirationDate(token: string) {
 
//   try {
//     let decoded = this.helper.decodeToken(token);

//     if (decoded.exp === undefined) {
//       return null;
//     }
//     const date = new Date(0);
//     date.setUTCSeconds(decoded.exp);
//     return date;
//   } catch (e) {
//     this.logout();
//     return null;
//   }
// }
// logout() {
 
  
//   localStorage.removeItem('session');
  

  
  
//   this.router.navigate(["/login"]);
// }
// autenticado() {
//   //if (this.isTokenExpired()) {
//   return this.isTokenExpired();
//   // } else {
//   //   return false;
//   // }
// }
}
