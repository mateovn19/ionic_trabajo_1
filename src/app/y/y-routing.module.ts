import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YPage } from './y.page';

const routes: Routes = [
  {
    path: '',
    component: YPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YPageRoutingModule {}
