import { Component, OnInit } from '@angular/core';
import { AchatListService } from '../services/achat-list.service';
import { Achats } from '../models/achats.model';

@Component({
  selector: 'app-achat-list',
  templateUrl: './achat-list.page.html',
  styleUrls: ['./achat-list.page.scss'],
})
export class AchatListPage implements OnInit {
  achats!: Array<Achats>;

  constructor(private Achats: AchatListService) { }

  ngOnInit(): void {
    this.Achats.getAll().subscribe((data: any) => {
      this.achats = data;
    });
  }
}

