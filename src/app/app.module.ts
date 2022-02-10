import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ConfirmationService, MessageService, PrimeIcons} from "primeng/api";
import {AsideComponent} from "./layout/aside/aside.component";
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {FlexModule} from "@angular/flex-layout";


// Import routing module

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FlexModule
    ],
  declarations: [
    AppComponent,
    AsideComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    HttpClientModule,

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
