import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  id: Number = 0;
  project: any = {};
  constructor(
    private route:ActivatedRoute,
    private thaivm2:HttpClient
  ) {
    //lấy giá trị param đã truyền lên url
    //this.route.snapshot.params['tenParam'])
    this.id = this.route.snapshot.params['project']; //gán giá trị params trên url vào biến id
  }

  ngOnInit(): void {
    //B1: khai báo API URL:
    let apiUrl = 'http://localhost:3000/projects/' + this.id;
    
    //B2: gửi http request lên json-server để lấy dữ liệu
    this.thaivm2.get(apiUrl).subscribe(res => {
      this.project = res; //gán dữ liệu json-server trả về cho biến project
    })
  }
}
