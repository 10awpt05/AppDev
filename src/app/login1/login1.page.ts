import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {
  img: any = "../../assets/img/logo1.png"

  constructor(private r: Router, private storage: Storage) { }

 async ngOnInit() {
  await this.storage.create();
  }
  tologin() {
    this.r.navigate(['tabs']);
    }
  toreg() {
    this.r.navigate(['register']);
    }
    async setstorage() { //To set an item, use set(key, value)

      await this.storage.set('username', 'username');
      
      
      }
      
      async getstorage(){ //To get the item back, use get(name)
      
      const name = await this.storage.get('userName');
      
      }
      
      async removestorage(){ //To remove an item
      
      await this.storage.remove('userName');
      
      }

}
