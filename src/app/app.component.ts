import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/home', icon: 'home' },
    { title: 'Data Inventaris', url: '/inventaris', icon: 'person' }
  ];
  public labels = [];
  constructor() {}
}
