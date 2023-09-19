import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlBaser="http://localhost:9001/product/all"
  private urlBaseAgregar="http://localhost:9001/product/save"

  constructor(private clientHttp:HttpClient) { }
  obtenerProductos():Observable<Producto[]>{
    return this.clientHttp.get<Producto[]>(this.urlBaser);
  }
  agregarProducto(producto:Producto):Observable<Object>{
    return this.clientHttp.post(this.urlBaseAgregar, producto);
  }
}
