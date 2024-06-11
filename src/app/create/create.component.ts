import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Đảm bảo bạn đã thêm HttpClientModule

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],  // Import HttpClientModule
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'] // Đã sửa lỗi thành styleUrls
})
export class CreateComponent {
  constructor(
    private http: HttpClient, // Dùng để gửi http request
    private router: Router // Dùng để redirect
  ) {}

  onCreate(project: any): void { // Project là dữ liệu người dùng nhập vào form
    let apiUrl = 'http://localhost:3000/projects'; // Khai báo apiUrl

    // Để thực hiện validate, khởi tạo 1 biến tên là valid = true
    let valid = true;

    // Kiểm tra dữ liệu người dùng nhập vào form
    if (project.name.trim() == '' || project.name.trim().length < 3) {
      valid = false;
    }

    if (valid) { // Nếu valid = true, tức là dữ liệu hợp lệ
      // this.HttpClient.method(apiUrl, data).subscribe( res => {})
      this.http.post(apiUrl, project).subscribe(res => {
        if (res) {
          alert('Thêm mới thành công');
          // Điều hướng người dùng về trang danh sách
          this.router.navigate(['/list']);
        }
      });
    } else {
      alert('Dữ liệu không hợp lệ, vui lòng kiểm tra lại');
    }
  }
}
