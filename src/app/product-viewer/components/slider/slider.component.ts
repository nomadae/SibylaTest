import { Component, OnInit } from '@angular/core';
import {IImage} from "ng-simple-slideshow";
// import Swiper core and required modules
import SwiperCore from 'swiper/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }
}
