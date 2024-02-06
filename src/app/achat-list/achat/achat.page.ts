import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AchatListService } from 'src/app/services/achat-list.service';
import { Achats } from 'src/app/models/achats.model';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.scss'],
})
export class AchatPage implements OnInit {
  modif: boolean = false;
  achat!: Achats;

  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Achats: AchatListService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Achats.get(id).subscribe((value: any) => {
      this.achat = value;
    });
  }

  async setModif() {
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        header : 'Êtes vous sur de vouloir modifier cet élément ?',
        subHeader: 'Vous rendrez possible la modification de cet élément',
        buttons : [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            text: 'Configurer',
            handler: () => {this.modif = !this.modif}
          }
        ]
      });
      await alert.present();
    } else {
      this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications ont été enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Achats.update(this.achat).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Achats.delete(id);
    this.router.navigate(['/achat-list']);
  }
}
