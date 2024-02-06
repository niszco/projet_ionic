import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Achats } from '../models/achats.model';

@Injectable({
  providedIn: 'root'
})
export class AchatListService {
  private dbPath = '/achats';
  achatsRef!: AngularFirestoreCollection<Achats>;

  constructor(private db: AngularFirestore) { 
    this.achatsRef = db.collection(this.dbPath);
  }

  getAll() : any {
    return this.achatsRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewAchats(achats: Achats) : any {
    return new Observable(obs => {
      this.achatsRef.add({...achats}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any):any {
    return  new Observable(obs => {
      this.achatsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(achats: Achats) {
    return new Observable(obs => {
      this.achatsRef.doc(achats.id).update(achats);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`achats/${id}`).delete();
  }
}

