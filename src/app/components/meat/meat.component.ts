import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meat',
  templateUrl: './meat.component.html',
  styleUrls: ['./meat.component.css']
})
export class MeatComponent implements OnInit {

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
