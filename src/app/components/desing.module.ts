import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesingRoutingModule } from './desing.routing';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { MeatComponent } from './meat/meat.component';
import { AppsComponent } from './apps/apps.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    MeatComponent,
    AppsComponent,
    FeaturedComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DesingRoutingModule,
    MatInputModule,
    MatIconModule
  ]
})
export class DesingModule { }
