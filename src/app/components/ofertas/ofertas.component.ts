import { Component, OnInit, Input } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Product } from 'src/models/product';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styles: []
})
export class OfertasComponent implements OnInit {
  pagina:number=1;
  paginas:number=1;
  products:Product[]=[];

  //@Input('resultado') public resultado;

  constructor( public _os:OfertasService) { }

  ngOnInit() {

    this.cargarOfertas();

    this.products.forEach(p => {
      console.log(p);
      
    });

    
  }

  // buscar() {
  //   this.resultado;
  //   console.log(this.resultado);
  //   if (this.resultado.length >= 3) {

  //     this._os.busqueda(this.resultado).subscribe((data: any) => {

  //       this.products = data.result;
  //       console.log(this.products);

  //     })
  //   }
  // }


  cargarOfertas(){
    this._os.ofertasGet().subscribe((data:any)=>{
      
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
