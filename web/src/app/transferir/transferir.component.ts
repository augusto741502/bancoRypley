import { Component, OnInit } from '@angular/core';

import { Destinatario } from '../destinatario/destinatario';
import { DestinatarioService } from '../destinatario.service';

import { Transferir } from './transferir'

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit {
  public destinatario?:Destinatario;
  public rechazo:any;
  public destino:any;
  public obj:any;

  public verSeleccion: string        = '';


  public transferir?:Transferir;
  constructor(private destinatarioService:DestinatarioService) { 
       
    this.destinatario = new Destinatario();
    this.rechazo='';
    this.verSeleccion='';
    this.destino='';

    this.transferir = new Transferir()

  }

  ngOnInit(): void {
    this.destinatarioService.buscaDestinatarios().subscribe(data => {
      this.rechazo = data;
    });
  }

  onchange(_this:any): void{
   // console.log("----->", _this.destinatario.banco_destino);

   // console.log(this.destinatario);

    this.destinatarioService.buscaDestinatario(_this.transferir.id).subscribe(data => {
   

      this.destino = data
    });
  }


  onSubmit(){

    let datoTranferencia = {
      id_usuario : this.destino[0].id,
      monto:this.transferir?.monto
    }
    this.destinatarioService.postTransaccion(datoTranferencia).subscribe(data => {
      console.log(data);
    });
}

}
