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
  private urlBaseEliminar="http://localhost:9001/product/delete"
  //private urlBuscarId="http://localhost:9001/product/{id}"
  private urlBuscarId2="http://localhost:9001/product"

  constructor(private clientHttp:HttpClient) { }
  obtenerProductos():Observable<Producto[]>{
    return this.clientHttp.get<Producto[]>(this.urlBaser);
  }
  agregarProducto(producto:Producto):Observable<Object>{
    return this.clientHttp.post(this.urlBaseAgregar, producto);
  }
  eliminarProducto(id:number):Observable<Object>{
    return this.clientHttp.delete(this.urlBaseEliminar+"/"+id);
  }
  //obtiene el producto por id
  buscarProducto(id:number):Observable<Producto>{
    //return this.clientHttp.get<Producto>(this.urlBuscarId.replace("{id}", id.toString()));
    return this.clientHttp.get<Producto>(this.urlBuscarId2+"/"+id)
  }
}

