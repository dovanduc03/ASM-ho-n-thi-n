import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:5000';
  constructor(private http:HttpClient) { }

  //khai báo hàm đăng ký
  register=(data:any) => {
    return this.http.post(this.apiUrl + '/register',data);
  }

  //khai báo hàm đăng nhập
  login=(data:any): Observable<any> => {
    return this.http.post(this.apiUrl + '/login', data);
  }

  //hàm kiểm tra thông tin đăng nhập
  checkAuth=(): boolean => {
    let valid = false;
    try {
      const user = localStorage.getItem('user');
      if (user !== null) {
        const userObj = JSON.parse(user);
        const token = jwtDecode(userObj?.token); //lấy token từ localStorage và giải mã
        //nếu expire > Date.now() => token còn hạn sử dụng
        if (token.exp as any > Date.now()/1000) { 
          valid = true;
        } 
      }
    } catch (error) {
      alert(error);
      return false;
    } 
    return valid;
  }
}
