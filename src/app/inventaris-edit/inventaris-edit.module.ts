import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarisEditPageRoutingModule } from './inventaris-edit-routing.module';

import { InventarisEditPage } from './inventaris-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarisEditPageRoutingModule
  ],
  declarations: [InventarisEditPage]
})
export class InventarisEditPageModule {}
