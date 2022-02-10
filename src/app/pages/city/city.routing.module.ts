import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CityComponent} from "./pages/city.component";
import {EditCityComponent} from "./pages/edit-city/edit-city.component";

export const routes: Routes = [
  {
    path: '',
    component: CityComponent
  },
  {
    path: 'add',
    component: EditCityComponent
  },
  {
    path: 'edit',
    component: EditCityComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityRoutingModule {}
