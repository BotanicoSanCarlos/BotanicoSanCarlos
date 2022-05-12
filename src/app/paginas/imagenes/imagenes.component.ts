import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { TablaGoogleSheet, atributosTablaGoogleSheet } from './google-sheet.model';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  intervalo = 3500;
  empezarDesde = 0;

  tablaGoogleSheets$!: Observable<TablaGoogleSheet[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
    this.tablaGoogleSheets$ = this.googleSheetsDbService.get<TablaGoogleSheet>(
      environment.datosSheet.id, environment.datosSheet.imagenes, atributosTablaGoogleSheet); 
  }

}
