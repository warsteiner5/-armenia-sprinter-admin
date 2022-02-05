import {RouterModule, Routes} from "@angular/router";
import {TransferComponent} from "./transfer.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: TransferComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferRoutingModule {}
