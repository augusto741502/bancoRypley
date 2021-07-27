import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinatarioComponent } from './destinatario/destinatario.component';

import { TransferirComponent } from './transferir/transferir.component'

import { HistorialComponent } from './historial/historial.component'

const routes: Routes = [
  {path:'', component:DestinatarioComponent},
  {path:'transferir', component:TransferirComponent},
  {path:'historico', component:HistorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
