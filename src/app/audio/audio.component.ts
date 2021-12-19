import { Component, OnInit, Input } from '@angular/core';
import { Cancion } from '../cancion';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  @Input() cancion: Cancion;

  constructor() { }

  ngOnInit(): void {
  }
}
