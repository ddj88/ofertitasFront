import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styles: []
})
export class CarruselComponent implements OnInit {


  products:Product[]=[];
  constructor(public _os:OfertasService) { }

  ngOnInit() {
    this.cargarOfertas();
  }


  cargarOfertas() {
    this._os.ofertasGet().subscribe((data: Product[]) => {

      this.products = data;
      console.log(this.products);


    })

  }
}
