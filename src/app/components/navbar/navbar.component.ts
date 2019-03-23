import { Component, OnInit, } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
 termino;


  constructor() { 
    
    
    
  }

  ngOnInit() {

  }

  buscar(termino){
    this.termino=termino;
    console.log(this.termino);
    
  }

}
