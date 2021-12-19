import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  filterLista = '';
  selectedCancion: Cancion;

  cancionesDB: Observable<any[]>;

  constructor (firestore: AngularFirestore) {
    this.cancionesDB = firestore.collection ('cancionesDB').valueChanges();
  }

  ngOnInit(): void {}

  onSelect(cancion: Cancion): void {
    this.selectedCancion = cancion;
  }
}
