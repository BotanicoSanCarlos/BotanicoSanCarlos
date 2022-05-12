import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  private p5 : any;


  cargoIframe:boolean=false;


  constructor() { }
  ngOnInit() {
   // this.createCanvas();
  }

  ocultarElementosIframe(): void{
    /* #gui {
        display: none!important;
    } */
/* $("#gui").hide(); */

//console.log("Cargó iframe y supuestamente oculto la gui");
this.cargoIframe = true;

/* 
document.addEventListener("wheel", function(event) {
  if (document.activeElement.type === "iframe" &&
    document.activeElement.classList.contains("noscroll")) {
    document.activeElement.blur();
  }
}); */



  }


  /* 
  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }
  
  private sketch(p: any) {
    p.setup = () => {
      p.createCanvas(700, 600);
    };
  
    p.draw = () => {
      p.background(255);
      p.fill(0);
      p.rect(p.width / 2, p.height / 2, 50, 50);
    };
  }
 */
  /* ngOnInit(): void {

    const sketch = (s) => {

      s.preload = () => {
        // preload code
      }

      s.setup = () => {
        s.createCanvas(400, 400);
      };

      s.draw = () => {
        s.background(255);
        s.rect(100, 100, 100, 100);
      };
    }

    let canvas = new p5(sketch);


  } */

  scroll(e: HTMLElement) {
    e.scrollIntoView();
}

}
