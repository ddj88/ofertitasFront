import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { Product } from 'src/models/product';


@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  urlApi ="https://api.ofertitas.club/v1/"
  products: Product[] = [];
  constructor(public http:HttpClient) { }


  ofertasGet(){
    let url:string=this.urlApi+"/offers";

    return this.http.get(url).pipe(map((resp:any)=>{
     return resp;
    })
    
    )}


  busqueda(termino){
    let url:string=this.urlApi+"/offers/search/";
    let query:string="?query="+termino;
    let limit: string ="&limit=5";
    let page:string="&page=1";
    url+=query+limit+page;
    console.log(url);
    
    return this.http.get(url).pipe(map((data:any)=>{
      return data.result;
      
    }))
    
  

  }


    }


  

