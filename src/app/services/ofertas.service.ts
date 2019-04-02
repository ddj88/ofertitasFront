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


  ofertasGet(pagina?:string){
    let url:string;
    if (pagina) {
      url=this.urlApi+"offers/?page="+pagina;
    }else{
      url=this.urlApi+"offers";

    }

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

    
    return this.http.get(url).pipe(map((data:any)=>{
      return data.result;
      
    }))
    
  

  }


  novedades(){
    let url =this.urlApi+"/offers/news";
    return this.http.get(url)
  }


  votar(id){
    let url = this.urlApi+"/vote/";
    let body={
      'offer_id':id
    }
    return this.http.post(url,body)
  }

border_clear
    }


  

