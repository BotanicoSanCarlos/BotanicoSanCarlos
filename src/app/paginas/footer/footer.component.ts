import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }
  scrollToUp(){
    window.scrollTo(0, 0)
  }

}
