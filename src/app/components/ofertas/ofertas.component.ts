import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Product } from 'src/models/product';
import { Router } from '@angular/router';




@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styles: []
})
export class OfertasComponent implements OnInit {
  pagina:number=1;
  paginas:number=1;
  products:Product[]=[];

  constructor( public _of:OfertasService) { }

  ngOnInit() {

    this.cargarOfertas();

    this.products.forEach(p => {
      console.log(p);
      
    });
  }


  cargarOfertas(){
    this._of.ofertasGet().subscribe((data:any)=>{
      
      this.products=data.result;
      console.log(this.products);
      this.paginas = data.pages;
      console.log(this.paginas);
      
      
      });
      
    }



  verMas(product:Product){
    let desCorta:string;
    if (product.description.length > 200) {
      desCorta = product.description.slice(0,100)
      return desCorta+"...";
    }
    return product.description;
  

  }

  setPagina(valor:number){
    this.pagina += valor;

    this.cargarOfertas();

  }


          
}
