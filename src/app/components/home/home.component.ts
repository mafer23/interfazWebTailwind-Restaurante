import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './../shared/navbar/navbar.component';
import { MeatComponent } from './../meat/meat.component';
import { AppsComponent } from './../apps/apps.component';
import { FeaturedComponent } from './../featured/featured.component';
import { FooterComponent } from './../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
