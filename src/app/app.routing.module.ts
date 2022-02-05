import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

export const appRoutes: Routes = [
  {
    path: 'transfer',
    loadChildren: () => import('./pages/transfer/transfer.module').then((m) => m.TransferModule),
    data: { title: 'Трансфер' },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'transfer',
  },
];


export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  enableTracing: true,
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, routingConfiguration)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
