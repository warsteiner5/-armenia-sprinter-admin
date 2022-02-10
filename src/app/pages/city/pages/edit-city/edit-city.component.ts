import { Component, OnInit } from '@angular/core';
import {ICity} from "../../interfaces/city.interface";
import {CityService} from "../../services/city.service";
import {City} from "../../models/city.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {
  public city: City = new City();
  constructor(private _cityService: CityService,
              private _router: Router) { }

  ngOnInit(): void {
    this.city = this._cityService.currentCity;
  }

  public submit(): void {
    if (this.city._id) {
      this._cityService.updateCity(this.city).subscribe( _ => this._router.navigate(['/', 'cities']));
    } else {
      this._cityService.addCity(this.city).subscribe( _ => this._router.navigate(['/', 'cities']));
    }

  }

}
