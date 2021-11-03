import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {ModalModule} from "ngx-bootstrap/modal";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {StoreModule} from "@ngrx/store";
import {courseReducer} from "./store/course.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CourseEffects} from "./store/effects";
import {HttpClientModule} from "@angular/common/http";
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CourseComponent,
    ItemComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),

    StoreModule.forRoot({ courses: courseReducer }),
    EffectsModule.forRoot([CourseEffects]),

    HttpClientModule,
    FontAwesomeModule,
    NgbModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
