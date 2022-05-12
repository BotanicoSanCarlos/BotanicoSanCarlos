import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ViewChild, ElementRef } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import {
  TablaGoogleSheet,
  atributosTablaGoogleSheet,
} from './google-sheet.model';

@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.component.html',
  styleUrls: ['./lector-qr.component.css'],
})
export class LectorQRComponent implements OnInit, OnDestroy {
  @ViewChild('scanner', { static: false }) scanner!: ZXingScannerComponent;
  listaCamaras: any = '';
  scannerEnabled: boolean = true;
  flashOn: boolean = false;
  formato = [BarcodeFormat.QR_CODE];
  camaraFuncionando: boolean = false;

  @ViewChild('tarjetaDatos', { static: true }) tarjetaDatos!: ElementRef;

  //formato = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX ];

  tablaGoogleSheets$!: Observable<TablaGoogleSheet[]>;
  datos!: any;
  hash!: string;

  hayDatos: boolean = false;

  constructor(
    private ruta: ActivatedRoute,
    private googleSheetsDbService: GoogleSheetsDbService
  ) {}

  ngOnInit(): void {
    this.obtenerRuta();
  }

  obtenerRuta() {
    const id = this.ruta.snapshot.paramMap.get('id');

    //console.log(id);

    if (id != null) {
      this.traerDatosGoogleSheet(id);
    }

    /* this.ruta.params.subscribe((parametro) => {
      console.log('parametro ID: ', parametro['id']);
      if(parametro['id'] != null){
        this.scannerEnabled = false;
      this.hayDatos = true;
      this.hash = parametro['id'];
      this.traerDatosGoogleSheet(parametro['id']);
      }
      
    });
 */
  }

  traerDatosGoogleSheet(buscar: string) {
    /* this.tablaGoogleSheets$ =  */
    this.googleSheetsDbService
      .get<TablaGoogleSheet>(
        environment.datosSheet.id,
        environment.datosSheet.qr,
        atributosTablaGoogleSheet
      )
      .subscribe((tablaGoogleSheets: object[]) => {
       //console.log(tablaGoogleSheets);

        tablaGoogleSheets.forEach((dato: any) => {
          if (buscar.toLowerCase() == dato.nombreVulgar.toLowerCase()) {
            //console.log(dato);
            this.scannerEnabled = false;
            this.hayDatos = true;
            this.datos = dato;
            window.scrollBy({
              top: 100,
              left: 0,
              behavior: 'smooth',
            });
          }
        });
      });
  }

  ngOnDestroy(): void {
    this.scannerEnabled = false;
  }

  scanSuccessHandler($event: any): void {
    console.log($event);
    // this.hayDatos = true;
    //this.tarjetaDatos.scrollIntoView();
    this.scannerEnabled = false;

    let caracteresLink = $event.indexOf('qr/', 0);
    caracteresLink += 3;
    let idLinkRecortado = $event.substr(caracteresLink);
    console.log(idLinkRecortado);

    this.traerDatosGoogleSheet(idLinkRecortado);
  }

  scroll() {
    console.log(this.tarjetaDatos);
    this.tarjetaDatos.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  scrollTo(e: HTMLElement) {
    e.scrollIntoView();
  }

  camerasNotFound() {
    // Display an alert modal here
    this.camaraFuncionando = !this.camaraFuncionando;
  }

  cameraFound() {
    // Log to see if the camera was found
    console.log('Camara funcionando');
    this.camaraFuncionando = true;
  }

  activarCamara() {
    this.scannerEnabled = !this.scannerEnabled;
    if (this.scannerEnabled) {
      this.hayDatos = false;
    }
  }
}
