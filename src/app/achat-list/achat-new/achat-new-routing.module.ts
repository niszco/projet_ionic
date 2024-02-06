import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchatNewPage } from './achat-new.page';

const routes: Routes = [
  {
    path: '',
    component: AchatNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchatNewPageRoutingModule {}
