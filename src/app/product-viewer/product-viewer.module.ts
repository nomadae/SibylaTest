import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SlideshowModule} from "ng-simple-slideshow";
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatCardModule} from "@angular/material/card";
import {SwiperModule} from "swiper/angular";
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    SliderComponent,
    NavbarComponent,
    CardComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        SlideshowModule,
        MatCardModule,
        SwiperModule
    ]
})
export class ProductViewerModule { }
