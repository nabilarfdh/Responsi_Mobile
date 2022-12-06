import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-inventaris',
  templateUrl: './inventaris.page.html',
  styleUrls: ['./inventaris.page.scss'],
})
export class InventarisPage{
  no_inventaris : any;
  nama : any;
  jumlah : any;
  keterangan : any;
  inventaris : any[] = [];
  
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private authService: AuthenticationService,
    private router: Router
  ) { 
    this.getInventaris();
  }

  ngOnInit() {
    console.log('cek fungsi halaman event init berjalan');
  }

  ionViewDidEnter(){
    console.log('jika selesai loading');
    this.getInventaris();
  }

  getInventaris(){
    this._apiService.getInventaris().subscribe((res:any)=>{
      console.log("sukses", res);
      this.inventaris = res;
    }, (error:any) => {
      console.log("gagal", error);
      this.alertController.create({
        header : 'Notifikasi',
        message : 'Gagal Memuat Data Inventaris',
        buttons : ['OK']
      }).then(res => {
        res.present();
      })
    })
  }

  deleteInventaris(id: any){
    this.alertController.create({
      header : 'Perhatian',
      subHeader : 'Yakin Menghapus Data Ini?',
      buttons : [
        {
          text : 'Batal',
          handler : (data: any)=>{
            console.log('dibatalkan', data);
          }
        },
        {
          text : 'Yakin',
          handler : (data: any)=>{
            this._apiService.deleteInventaris(id).subscribe((res: any) => {
              console.log("sukses", res);
              this.getInventaris();
            }, (error: any)=>{
              console.log("error", error);
              this.alertController.create({
                header : 'Notifikasi',
                message : 'Gagal Memuat Data Inventaris',
                buttons : ['OK']
              }).then(res => {
                res.present();
              })
            })
          }
        }
      ]
    }).then(res=>{
      res.present();
    })
  }

  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }
}
