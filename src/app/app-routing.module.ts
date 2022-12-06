import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren:() => import('./inventaris/inventaris.module').then( m => m.InventarisPageModule),
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'inventaris',
    loadChildren: () => import('./inventaris/inventaris.module').then( m => m.InventarisPageModule)
  },
  {
    path: 'inventaris-tambah',
    loadChildren: () => import('./inventaris-tambah/inventaris-tambah.module').then( m => m.InventarisTambahPageModule)
  },
  {
    path: 'inventaris-edit/:no_inventaris',
    loadChildren: () => import('./inventaris-edit/inventaris-edit.module').then( m => m.InventarisEditPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
