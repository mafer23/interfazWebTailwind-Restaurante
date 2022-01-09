import { Component, OnInit } from '@angular/core';
import { MeatComponent } from './../meat/meat.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  start:any;
  constructor() { }

  ngOnInit(): void {
    this.start =[
      {
        start:1
      },
      {
        start:2
      },
      {
        start:3
      },
      {
        start:4
      },
      {
        start:5
      }

    ]
  }

}
