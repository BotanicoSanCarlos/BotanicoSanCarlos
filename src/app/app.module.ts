import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { RouterLinkActive } from '@angular/router';


import { PaginasModule } from './paginas/paginas.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { FooterComponent } from './paginas/footer/footer.component';

import { AdminModule } from './admin/admin.module'


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PaginasModule,
    AdminModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
