import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

//componentes
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PionerasComponent } from './paginas/pioneras/pioneras.component';
import { RelatosDeSusProtagonistasComponent } from './paginas/relatos-de-sus-protagonistas/relatos-de-sus-protagonistas.component';
import { LectorQRComponent } from './paginas/lector-qr/lector-qr.component';
import { RecorridoVirtualComponent } from './paginas/recorrido-virtual/recorrido-virtual.component';
import { ImagenesComponent } from './paginas/imagenes/imagenes.component';
import { EditorDeTextoComponent } from './admin/editor-de-texto/editor-de-texto.component';

//admin

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    component: InicioComponent,
    data: {
      title: 'Inicio',
    },
  },
  {
    path: 'pioneras',
    component: PionerasComponent,
    data: {
      title: 'Pioneras',
    },
  },
  {
    path: 'relatos',
    component: RelatosDeSusProtagonistasComponent,
    data: {
      title: 'Relatos',
    },
  },
  {
    path: 'galeria',
    component: ImagenesComponent,
    pathMatch: 'full',
    data: {
      title: 'Galería de Imágenes',
    },
  },
  {
    path: 'qr',
    component: LectorQRComponent,
    data: {
      title: 'Descubrí que es lo que ves',
    },
  },{
    path: 'qr/:id',
    component: LectorQRComponent,
    data: {
      title: 'Descubrí que es lo que ves',
    },
  },
  {
    path: 'vr',
    component: RecorridoVirtualComponent,
    
    data: {
      title: 'Visita Virtual',
    },
  },
  {
    path: 'admin',
    component: EditorDeTextoComponent,
  
    data: {
      title: 'Admin',
    },
  },
  { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
