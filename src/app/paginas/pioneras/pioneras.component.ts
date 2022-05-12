import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { TablaGoogleSheet, atributosTablaGoogleSheet } from './google-sheet.model';


@Component({
  selector: 'app-pioneras',
  templateUrl: './pioneras.component.html',
  styleUrls: ['./pioneras.component.css']
})
export class PionerasComponent implements OnInit {

  
  tablaGoogleSheets$!: Observable<TablaGoogleSheet[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
    this.tablaGoogleSheets$ = this.googleSheetsDbService.get<TablaGoogleSheet>(
      environment.datosSheet.id, environment.datosSheet.pioneras, atributosTablaGoogleSheet); 
  }

}
