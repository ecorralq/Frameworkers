import { Component, OnInit } from '@angular/core';

import { Cancion } from '../cancion';
import { FilterPipe } from '../filtro/filter.pipe';
import { Lista } from '../lista';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})



export class ListaComponent implements OnInit {

  cancion=Lista;

  selectedCancion?: Cancion;

  onSelect(cancion: Cancion): void {
    this.selectedCancion = cancion;
  }

  constructor() {}
  filterLista = '';


  ngOnInit(): void {}

}
