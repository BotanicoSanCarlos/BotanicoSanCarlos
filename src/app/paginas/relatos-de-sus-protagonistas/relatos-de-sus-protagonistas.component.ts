import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { TablaGoogleSheet, atributosTablaGoogleSheet } from './google-sheet.model';


@Component({
  selector: 'app-relatos-de-sus-protagonistas',
  templateUrl: './relatos-de-sus-protagonistas.component.html',
  styleUrls: ['./relatos-de-sus-protagonistas.component.css']
})
export class RelatosDeSusProtagonistasComponent implements OnInit {

  tablaGoogleSheets$!: Observable<TablaGoogleSheet[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
    this.tablaGoogleSheets$ = this.googleSheetsDbService.get<TablaGoogleSheet>(
      environment.datosSheet.id, environment.datosSheet.relatos, atributosTablaGoogleSheet); 

  }

}
