import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-inventaris-edit',
  templateUrl: './inventaris-edit.page.html',
  styleUrls: ['./inventaris-edit.page.scss'],
})
export class InventarisEditPage implements OnInit {
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
  ) {
    this.route.params.subscribe((param:any)=>{
      this.no_inventaris = param.no_inventaris;
      console.log(this.no_inventaris);
      this.ambilInventaris(this.no_inventaris);
    })
  }

  ngOnInit() {
  }

  public optionFn() : void {
    let opt = this.keterangan;
  }

  ambilInventaris(no_inventaris:any){
    this._apiService.ambilInventaris(no_inventaris).subscribe((res: any)=>{
      console.log('Sukses', res);
      let inventaris = res;
      this.nama = inventaris.nama;
      this.jumlah = inventaris.jumlah;
    },(error:any)=>{
      console.log('error', error);
      alert('Gagal Ambil Data');
    })
  }

  editInventaris(){
    let url = this._apiService.apiURL()+"/edit.php";
    Http.request({
      method : "POST",
      url : url,
      headers : {"Content-Type" : "application/json"},
      data : {
        no_inventaris : this.no_inventaris,
        nama : this.nama,
        jumlah : this.jumlah,
        keterangan : this.keterangan,
      },
    }).then((data: any)=>{
      this.alertController.create({
        header : 'Notifikasi',
        message : 'Berhasil Edit Data Inventaris',
        buttons : ['OK'],
      }).then(res=>{
        res.present();
      });
      this.router.navigateByUrl('/inventaris');
    },(err)=>{
      this.alertController.create({
        header : 'Notifikasi',
        message : 'Gagal Edit Data Inventaris',
        buttons : ['OK'],
      }).then(res=>{
        res.present();
      });
    })
  }
}
