import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchatNewPageRoutingModule } from './achat-new-routing.module';

import { AchatNewPage } from './achat-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchatNewPageRoutingModule
  ],
  declarations: [AchatNewPage]
})
export class AchatNewPageModule {}
