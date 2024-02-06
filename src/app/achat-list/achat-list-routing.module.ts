import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchatListPage } from './achat-list.page';

const routes: Routes = [
  {
    path: '',
    component: AchatListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./achat-new/achat-new.module').then( m => m.AchatNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./achat/achat.module').then( m => m.AchatPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchatsListPageRoutingModule {}
