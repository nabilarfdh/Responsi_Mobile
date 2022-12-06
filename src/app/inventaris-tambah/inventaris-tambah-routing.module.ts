import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarisTambahPage } from './inventaris-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: InventarisTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarisTambahPageRoutingModule {}
