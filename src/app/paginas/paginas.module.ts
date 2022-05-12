//import basicos Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RouterLinkActive } from '@angular/router'; 


//libreria ngx-bootstrap
/* import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { ModalModule } from "ngx-bootstrap/modal";
import { PopoverModule } from "ngx-bootstrap/popover"; */
import { CarouselModule } from "ngx-bootstrap/carousel";

/* import {GoogleMapsModule} from '@angular/google-maps'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; */

import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';


//componentes
import { InicioComponent } from './inicio/inicio.component';
import { PortadaComponent } from './inicio/portada/portada.component';
import { DondeEstamosYHorariosComponent } from './inicio/donde-estamos-y-horarios/donde-estamos-y-horarios.component';
import { FotosComponent } from './inicio/fotos/fotos.component';
import { PionerasComponent } from './pioneras/pioneras.component';
import { RelatosDeSusProtagonistasComponent } from './relatos-de-sus-protagonistas/relatos-de-sus-protagonistas.component';
import { ContactoComponent } from './inicio/contacto/contacto.component';
import { EncabezadoSubpaginasComponent } from './encabezado-subpaginas/encabezado-subpaginas.component';
import { LectorQRComponent } from './lector-qr/lector-qr.component';
import { AccesosDirectosComponent } from './inicio/accesos-directos/accesos-directos.component';
import { RecorridoVirtualComponent } from './recorrido-virtual/recorrido-virtual.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    InicioComponent,
    PortadaComponent,
    DondeEstamosYHorariosComponent,
    FotosComponent,
    PionerasComponent,
    RelatosDeSusProtagonistasComponent,
    ContactoComponent,
    EncabezadoSubpaginasComponent,
    LectorQRComponent,
    AccesosDirectosComponent,
    RecorridoVirtualComponent,
    ImagenesComponent,
    
  ],
  imports: [
    RouterModule,
    ZXingScannerModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    /* FontAwesomeModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
 //   JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    GoogleMapsModule,*/
    CarouselModule.forRoot(),
  ],
  providers: [
    {
      provide: API_KEY,
      useValue: environment.googleSheetsApiKey,
    },
    GoogleSheetsDbService
  ],
  exports:[
    InicioComponent,
   ]
})
export class PaginasModule { }
