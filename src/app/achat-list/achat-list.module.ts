import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchatListPageRoutingModule } from './achat-list-routing.module';

import { AchatListPage } from './achat-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchatListPageRoutingModule
  ],
  declarations: [AchatListPage]
})
export class AchatListPageModule {}
