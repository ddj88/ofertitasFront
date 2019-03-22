import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { Product } from 'src/models/product';


@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  products: Product[] = [];
  constructor(public http:HttpClient) { }


  ofertasGet(){
    let url:string="https://api.ofertitas.club/v1/offers";

    return this.http.get(url).pipe(map((resp:any)=>{
      

      
     return resp;
    })
    
    )}


    }


  

