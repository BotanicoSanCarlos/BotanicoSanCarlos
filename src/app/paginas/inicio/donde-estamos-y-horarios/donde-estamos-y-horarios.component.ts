import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { TablaGoogleSheet, atributosTablaGoogleSheet } from './google-sheet.model';

@Component({
  selector: 'app-donde-estamos-y-horarios',
  templateUrl: './donde-estamos-y-horarios.component.html',
  styleUrls: ['./donde-estamos-y-horarios.component.css']
})
export class DondeEstamosYHorariosComponent implements OnInit {

 
  tablaGoogleSheets$!: Observable<TablaGoogleSheet[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
    this.tablaGoogleSheets$ = this.googleSheetsDbService.get<TablaGoogleSheet>(
      environment.datosSheet.id, environment.datosSheet.horaios, atributosTablaGoogleSheet); 
  }
}
