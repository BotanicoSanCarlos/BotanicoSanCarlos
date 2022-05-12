import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

//https://codepen.io/djdabe/pen/qXgJNV
  
  isClosed :boolean = false;

 ngOnDestroy () {
}

cerrarMenu(){
  let  overlay = $('.overlay');
 $('#wrapper').toggleClass('toggled');
  if (this.isClosed == true) {     
    overlay.hide();
    this.isClosed = false;
  } else {  
    overlay.show();
    this.isClosed = true;
  } 
}

menu(e: HTMLElement){
  /* e.scrollIntoView(); */
 // this.document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start' });

 /* e.scrollTop;
 e.scrollIntoView({ behavior: 'smooth', block: 'start' }); */
 //window.scrollTo(0, 0)
 window.scrollBy({ 
  top: 0,
  left: 0, 
  behavior: 'smooth' 
});
 this.cerrarMenu();
}
  ngOnInit(): void {
  }

}
