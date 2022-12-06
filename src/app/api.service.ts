import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) { }

  apiURL() {
    return "http://localhost:8080/inventaris";
  }

  getInventaris(){
    return this.http.get(this.apiURL()+'/tampil.php');
  }

  deleteInventaris(id: any){
    return this.http.delete(this.apiURL()+'/hapus.php?no_inventaris=' + id);
  }
  
  ambilInventaris(id: any){
    return this.http.get(this.apiURL()+'/lihat.php?no_inventaris=' + id);
  }
}
