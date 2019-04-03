import { Component, OnInit } from '@angular/core';
import { OfertasComponent } from '../ofertas/ofertas.component';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styles: []
})
export class NovedadesComponent implements OnInit {

  constructor( private _oc:OfertasService) { }

  ngOnInit() {
  }



  novedades(){
    this._oc.novedades().subscribe(resp=>console.log(resp)
    )
  }
}
