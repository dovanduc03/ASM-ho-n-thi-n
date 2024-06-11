import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http:HttpClient,
    private router:Router
  ) {}

  apiUrl = 'http://localhost:3000/projects';

  //khai báo hàm gửi http request lên json-server
  //lấy danh sách dữ liệu
  getList() {
    return this.http.get(this.apiUrl)
  }

  //lấy thông tin chi tiết
  getDetail(id: string) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  //thêm mới
  createProject(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  //xóa project
  deleteProject(id: string) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
