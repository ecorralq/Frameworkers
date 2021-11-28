import { Component, OnInit } from '@angular/core';

import { Cancion } from '../cancion';
import { Lista } from '../lista';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})



export class ListaComponent implements OnInit {

  cancion=Lista;

  selectedCancion!: Cancion;

  constructor() {}
  filterLista = '';

  ngOnInit(): void {}

  onSelect(cancion: Cancion): void {
    this.selectedCancion = cancion;
  }

}
