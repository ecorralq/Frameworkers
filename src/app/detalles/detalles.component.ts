import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

@Input() cancion: any = null;
@Output() cerrar= new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
