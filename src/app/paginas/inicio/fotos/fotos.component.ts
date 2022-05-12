import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  intervalo = 2500;
  empezarDesde = 0;
  imagenes: {src: string; titulo?: string}[] = [
    {src: 'assets/imagenes/inicio/botanico-1.png'},
    {src: 'assets/imagenes/inicio/botanico-2.png'},
    {src: 'assets/imagenes/inicio/botanico-3.png'},
    {src: 'assets/imagenes/inicio/botanico-4.png'},
    {src: 'assets/imagenes/inicio/botanico-5.png'},
    {src: 'assets/imagenes/inicio/botanico-6.png'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
