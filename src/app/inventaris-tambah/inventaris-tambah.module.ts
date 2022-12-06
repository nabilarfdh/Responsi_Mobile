import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarisTambahPageRoutingModule } from './inventaris-tambah-routing.module';

import { InventarisTambahPage } from './inventaris-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarisTambahPageRoutingModule
  ],
  declarations: [InventarisTambahPage]
})
export class InventarisTambahPageModule {}
