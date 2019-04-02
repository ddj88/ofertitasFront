import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { Router } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Product } from 'src/models/product';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
 termino:string="";
 productos:Product[]=[];
  @Output() resultado=new EventEmitter;
busqueda;

  constructor(public router:Router, public _os:OfertasService) { 
    
    
    
  }

  ngOnInit() {
    
    this.resultado.subscribe(r=>{
      this._os.busqueda(r).subscribe((res)=>{
        this.busqueda=res;
      
        
      }
      )
    }
    )
    
    
  }

  buscar(resultado) {
    this.resultado.emit(resultado); 
   
    
  }

  nuevaBusqueda(termino){
    console.log('clickado');
    
    if (termino.length>2) {
      return this.router.navigate(['buscar',termino]);
    }

    
  }


}
