import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado-subpaginas',
  templateUrl: './encabezado-subpaginas.component.html',
  styleUrls: ['./encabezado-subpaginas.component.css']
})
export class EncabezadoSubpaginasComponent implements OnInit {

  @Input() urlImagen: string = '';
  @Input() titulo:string = '';
  @Input() subtitulo:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
