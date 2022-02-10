import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './pages/city.component';
import {CityRoutingModule} from "./city.routing.module";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {FlexModule} from "@angular/flex-layout";
import {RippleModule} from "primeng/ripple";
import {EditCityComponent} from "./pages/edit-city/edit-city.component";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";



@NgModule({
  declarations: [
    CityComponent,
    EditCityComponent
  ],
    imports: [
        CommonModule,
        CityRoutingModule,
        TableModule,
        ButtonModule,
        FlexModule,
        RippleModule,
        FormsModule,
        InputTextModule
    ]
})
export class CityModule { }
