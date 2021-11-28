import { Component, OnInit, Input } from '@angular/core';
import { Cancion } from '../cancion';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

@Input() cancion!: Cancion;

  constructor() {}

  ngOnInit(): void {}

}
