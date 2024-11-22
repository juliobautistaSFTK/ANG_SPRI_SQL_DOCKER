import { Component, OnInit } from '@angular/core';
import { MyService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public data: any;
  public clave: number=1;

  constructor(
    private readonly myService: MyService
  ){}
  
  ngOnInit(): void {
    this.myService.getData(this.clave).then(data => {
      this.data = data;
    });
  }
}
