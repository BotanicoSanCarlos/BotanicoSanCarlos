import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy {

  isCollapsed = true;
  focus!:boolean;
  focus1!:boolean;
  focus2!:boolean;
  date = new Date();
  pagination = 3;
  pagination1 = 1;

  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }


  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy():void{

  }

}
