import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

const routes: Routes = [
  {path: 'productos',component: ListarProductoComponent},
  {path: '',redirectTo: 'productos',pathMatch: 'full'},
  {path: 'agregar',component: AgregarProductoComponent},
  {path: 'editar/:id',component: EditarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
