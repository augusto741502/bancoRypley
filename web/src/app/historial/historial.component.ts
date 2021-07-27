import { Component, OnInit } from '@angular/core';

import { DestinatarioService } from '../destinatario.service';

export interface PeriodicElement {
  nombre: string;
  rut: string;
  banco_destino: string;
  cuenta: string;
  monto: string;
}

/*const ELEMENT_DATA: PeriodicElement[] = [
  {nombre: 'Hydrogen', rut: '1.0079', banco: 'H', cuenta: '12345678', monto: '111'},
  {nombre: 'Helium', rut: '4.0026', banco: 'He', cuenta: '12345678', monto: '111'},
  {nombre: 'Lithium', rut: '6.941', banco: 'Li', cuenta: '12345678', monto: '111'},
  {nombre: 'Beryllium', rut: '9.0122', banco: 'Be', cuenta: '12345678', monto: '111'},
  {nombre: 'Boron', rut: '10.811', banco: 'B', cuenta: '12345678', monto: '111'},
  {nombre: 'Carbon', rut: '12.0107', banco: 'C', cuenta: '12345678', monto: '111'},
  {nombre: 'Nitrogen', rut: '14.0067', banco: 'N', cuenta: '12345678', monto: '111'},
  {nombre: 'Oxygen', rut: '15.9994', banco: 'O', cuenta: '12345678', monto: '111'},
  {nombre: 'Fluorine', rut: '18.9984', banco: 'F', cuenta: '12345678', monto: '111'},
  {nombre: 'Neon', rut: '20.1797', banco: 'Ne', cuenta: '12345678', monto: '111'},
];*/
//const ELEMENT_DATA: PeriodicElement[]
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'rut', 'banco_destino', 'cuenta', 'monto'];
  dataSource:any


  constructor(private destinatarioService:DestinatarioService) {

   }

  ngOnInit(): void {

        this.destinatarioService.getLstadeTransaccion().subscribe(data => {
          const ELEMENT_DATA: PeriodicElement[] = data;
          this.dataSource = ELEMENT_DATA;
       console.log(data);

      })
  }

}
