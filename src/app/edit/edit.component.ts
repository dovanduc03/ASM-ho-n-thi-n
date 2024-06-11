import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  apiUrl: string = 'http://localhost:3000/projects';
  id: string = '';
  oldProject: any = {};

  constructor(
    private http:HttpClient,
    private activeRoute: ActivatedRoute,
    private router:Router
  ) {
    //B1: lấy id từ url
    this.id = this.activeRoute.snapshot.params['project'];
    //gửi request lên json-server để lấy thông tin chi tiết
    this.http.get(this.apiUrl + '/' + this.id).subscribe(res => {
      this.oldProject = res;
    })
  }

  onEdit(project: any): void {
    //gửi http request update
    this.http.put(
      this.apiUrl + '/' + this.id,
      project
    ).subscribe(res => {
      if (res) {
        alert('Cập nhật thành công');
        this.router.navigate(['/list']);
      }
    })
  }
}
