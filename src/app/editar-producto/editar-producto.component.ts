import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  producto:Producto = new Producto();
  id:number;
  constructor(private productService:ProductService,
    private ruta:ActivatedRoute, private router:Router) {
    //
  }
  ngOnInit(){
    this.id = this.ruta.snapshot.params['id'];
    this.productService.buscarProducto(this.id).subscribe(data=>this.producto=data)
  }
  onSubmit(){
    this.guardarProducto();
  }
  guardarProducto(){
    this.productService.agregarProducto(this.producto)
    .subscribe(result => this.router.navigate(['/productos']));
  }
}
