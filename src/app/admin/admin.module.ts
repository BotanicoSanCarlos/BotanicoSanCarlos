import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxEditorModule,schema } from 'ngx-editor';
import { EditorDeTextoComponent } from './editor-de-texto/editor-de-texto.component';


@NgModule({
  declarations: [
    EditorDeTextoComponent
  ],
  imports: [
    CommonModule,
    //NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule.forRoot({
      locals: {
        // menu
        bold: 'Negrita',
        italic: 'Italic',
        code: 'Codigo',
        blockquote: 'Bloque',
        underline: 'Cita',
        strike: 'Strike',
        bullet_list: 'Lista',
        ordered_list: 'Lista Numerada',
        heading: 'Título',
        h1: 'Título 1',
        h2: 'Título 2',
        h3: 'Título 3',
        h4: 'Título 4',
        h5: 'Título 5',
        h6: 'Título 6',
        align_left: 'Alinear Izquierda',
        align_center: 'Alinear Centro',
        align_right: 'Alinear Derecha',
        align_justify: 'Justificado',
        text_color: 'Color Texto',
        background_color: 'Color Fondo',

        // popups, forms, others...
        url: 'URL',
        text: 'Texto',
        openInNewTab: 'Abrir en una nueva pestaña',
        insert: 'Insertar',
        altText: 'Alt Text',
        title: 'Titulo',
        remove: 'Eliminar',
      },
    }),
  ]
})
export class AdminModule { }
