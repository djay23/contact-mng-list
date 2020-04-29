import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  teams$: Observable<any>= this.http.get('/api/teams');
​
  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

}
