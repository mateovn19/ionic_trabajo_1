import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YPageRoutingModule } from './y-routing.module';

import { YPage } from './y.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YPageRoutingModule
  ],
  declarations: [YPage]
})
export class YPageModule {}
