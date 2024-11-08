import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {
    path: "",
    component: InicioComponent
  },

  {
    path: "ubicacion",
    component: UbicacionComponent
  },

  {
    path: "Contacto",
    component: ContactoComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
