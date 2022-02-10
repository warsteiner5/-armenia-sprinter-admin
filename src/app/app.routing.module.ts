import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

export const appRoutes: Routes = [
  {
    path: 'transfer',
    loadChildren: () => import('./pages/transfer/transfer.module').then((m) => m.TransferModule),
    data: { title: 'Трансфер' },
  },
  {
    path: 'cities',
    loadChildren: () => import('./pages/city/city.module').then((m) => m.CityModule),
    data: { title: 'Города' },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cities',
  },
];


export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  enableTracing: false,
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, routingConfiguration)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
