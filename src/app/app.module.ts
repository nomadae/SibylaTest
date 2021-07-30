import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from "./login/login.module";
import {ProductViewerModule} from "./product-viewer/product-viewer.module";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/components/login/login.component";
import {SliderComponent} from "./product-viewer/components/slider/slider.component";
import {SlideshowModule} from "ng-simple-slideshow";
import {SwiperModule} from "swiper/angular";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'view', component: SliderComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    ProductViewerModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
