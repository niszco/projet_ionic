import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchatsListPageRoutingModule } from './achat-list-routing.module';

import { AchatListPage } from './achat-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchatsListPageRoutingModule
  ],
  declarations: [AchatListPage]
})
export class AchatListPageModule {}
