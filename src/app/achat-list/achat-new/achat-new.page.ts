import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AchatListService } from 'src/app/services/achat-list.service';
import { Achats } from 'src/app/models/achats.model';

@Component({
  selector: 'app-achat-new',
  templateUrl: './achat-new.component.html',
  styleUrls: ['./achat-new.component.scss'],
})
export class AchatNewPage implements OnInit {
  public achats!: Achats;

  constructor(
    private Achats: AchatListService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.achats = new Achats();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouvel achat enregistré dans votre liste !',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/achat-list']);
      }, 2000);
    });
  }

  add() {
    this.Achats.saveNewAchats(this.achats).subscribe(() => {
      this.achats = new Achats();
      this.presentToast();
    });
  }
}
