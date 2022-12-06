import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from "@capacitor-community/http";
// import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-inventaris-tambah',
  templateUrl: './inventaris-tambah.page.html',
  styleUrls: ['./inventaris-tambah.page.scss'],
})
export class InventarisTambahPage implements OnInit {
  no_inventaris : any;
  nama : any;
  jumlah : any;
  keterangan : any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  public optionFn() : void {
    let opt = this.keterangan;
  }

  addInventaris(){
    let url = this._apiService.apiURL() + "/tambah.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        no_inventaris: this.no_inventaris,
        nama: this.nama,
        keterangan: this.keterangan,
        jumlah: this.jumlah
      },
    }).then((data) => {
      this.no_inventaris = '';
      this.nama = '';
      this.keterangan = '';
      this.jumlah = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input Data Inventaris',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/inventaris');
    }, (error) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input Data Inventaris',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }

}
