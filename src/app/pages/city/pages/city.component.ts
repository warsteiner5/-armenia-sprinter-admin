import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import {ICity} from "../interfaces/city.interface";
import {CityService} from "../services/city.service";
import {Router} from "@angular/router";
import {ConfirmationService, ConfirmEventType, MessageService} from "primeng/api";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class CityComponent implements OnInit {
  public cityList$: Observable<ICity[]> = this._cityService.cities$;
  constructor(private _cityService: CityService,
              private _router: Router,
              private _confirmationService: ConfirmationService,
              private _messageService: MessageService) { }

  ngOnInit(): void {
    this._cityService.getCityList().subscribe();
  }

  public addCity(): void {
    this._router.navigate(['/', 'cities', 'add']);
  }

  public editCity(city: ICity): void {
    this._cityService.currentCity = city;
    this._router.navigate(['/', 'cities', 'edit']);
  }

  public removeCity(cityId: string): void {
    this._confirmationService.confirm({
      message: 'Вы действительно хотите удалить запись?',
      header: 'Подтверждение удаления',
      icon: 'pi pi-info-circle',
      accept: () => {
        this._cityService.deleteCity(cityId).subscribe( _ =>
          this._messageService.add({severity:'info', summary:'Confirmed', detail:'Запись успешно удалена'}));
      },
      reject: (type: any) => {
        switch(type) {
          case ConfirmEventType.REJECT:
            this._messageService.add({severity:'error', summary:'Rejected', detail:'Вы отказались'});
            break;
          case ConfirmEventType.CANCEL:
            this._messageService.add({severity:'warn', summary:'Cancelled', detail:'Вы отменили'});
            break;
        }
      }
    });

  }

}
