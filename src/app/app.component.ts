import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private meta: Meta) {
    meta.addTags([
      {name: 'description', content: 'Jardín Botánico San Carlos, Comandante Luís Piedra Buena'},
      {name: 'autor', content: 'Agustín Scurzi'},
      {name: 'keywords', content: 'Jardín Botanico, San Carlos, Piedra Buena, Santa Cruz, Argentina'}
    ]);
}
}
