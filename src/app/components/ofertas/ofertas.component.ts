import { Component, OnInit, Input, HostListener } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Product } from 'src/models/product';





@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styles: []
})
export class OfertasComponent implements OnInit {
  pagina:number=1;
  paginas:number=1;
  prevBtn:boolean=true;
  nextBtn:boolean=true;
  products:Product[];
  votos:number;
  
  //@Input('resultado') public resultado;

  constructor( public _os:OfertasService) { }

  ngOnInit() {

    this.cargarOfertas();
    
  }



  cargarOfertas(pagina?:string){
    console.log(this.pagina);
    window.scrollTo(0, 0);
    if (pagina) {
      return this._os.ofertasGet(pagina).subscribe((data: any) => {
        console.log(data);
        
        this.products = data.result;
        this.pagina= data.currentPage;
        this.paginas = data.pages;
        this.votos= data.points;
      });

    }
    this._os.ofertasGet().subscribe((data:any)=>{
      console.log(data);
      
      this.products=data.result;
      this.pagina = data.currentPage;
      this.paginas = data.pages;
      });
      
    }



  // verMas(product:Product){
  //   let desCorta:string;
  //   if (product.description.length > 200) {
  //     desCorta = product.description.slice(0,100)
  //     return desCorta+"...";
  //   }
  //   return product.description;
  

  // }

  setPagina(valor:number){
    
    
    if (valor===1) {
      if (this.pagina===1) {
       
        return;
      }
      this.pagina--;
      this.cargarOfertas(this.pagina.toString());
      
    }
    if(valor===2){
      if (this.pagina===this.paginas) {
       
        return;
      }
      this.pagina++;
      this.cargarOfertas(this.pagina.toString());
    }
  

    
    
    console.log(this.pagina);
  }

  votador(id,event){
   
     
    this._os.votar(id).subscribe(resp=>{
      
    })
      }


          
}
