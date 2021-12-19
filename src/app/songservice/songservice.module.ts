import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cancion } from '../cancion';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
 providedIn: "root"
})

export class SongService {

  cancionesDBCollection: AngularFirestoreCollection<Cancion>;
  cancionesDB: Observable<any[]>;
  cancionesDBDoc: AngularFirestoreDocument<Cancion>;

  constructor (public firestore: AngularFirestore){

    //this.songs = firestore.collection ('songs').valueChanges();
    this.cancionesDBCollection = this.firestore.collection ('cancionesDB');
    this.cancionesDB = this.cancionesDBCollection.snapshotChanges()
      .pipe(map( actions =>{
        return actions.map( a =>{
          const data = a.payload.doc.data() as Cancion;
          data.ID = a.payload.doc.id;
          return data;
        });
      }));
    this.cancionesDBDoc = this.firestore.doc ('cancionesDB');
  }

  getFiles():Observable<Cancion[]>{
    return this.cancionesDB;
  }
}


