import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Product } from 'src/models/product';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {
  termino:EventListener;
  products:any[]=[];
  
  constructor(public activatedRoute:ActivatedRoute,
              public _os:OfertasService) {

   
     }

  ngOnInit() {
    this.activatedRoute.params.subscribe((p: any) => {
      this.termino = p.termino;
      this.cargarBusqueda();
      
    })
    
  }
  
  
  cargarBusqueda(){
    
    console.log(this.termino);
    
    this._os.busqueda(this.termino).subscribe((products:any)=>{
      
 
       this.products = products;
       console.log(this.products.length);
       
       
      
   
})
  }
  verMas(product: Product) {
    let desCorta: string;
    if (product.description.length > 200) {
      desCorta = product.description.slice(0, 100)
      return desCorta + "...";
    }
    return product.description;


  }

}
