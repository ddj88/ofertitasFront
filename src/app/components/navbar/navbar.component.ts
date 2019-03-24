import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { Router } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Product } from 'src/models/product';
import {  Observable } from 'rxjs';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
 termino:string="";
 productos:Product[]=[];
  @Output() resultado=new EventEmitter;


  constructor(public router:Router, public _os:OfertasService) { 
    
    
    
  }

  ngOnInit() {
    console.log(typeof(this.resultado));
    
  }

  buscar(resultado) {
    this.resultado.emit(resultado); 
  }

  nuevaBusqueda(termino){
    console.log('clickado');
    
    if (termino.length>3) {
      return this.router.navigate(['buscar',termino]);
    }

    
  }


}
