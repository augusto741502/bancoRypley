import { Component, OnInit } from '@angular/core';


import { Destinatario } from './destinatario';

import { DestinatarioService } from '../destinatario.service'
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-destinatario',
  templateUrl: './destinatario.component.html',
  styleUrls: ['./destinatario.component.css']
})
export class DestinatarioComponent implements OnInit {
 
  public destinatario?:Destinatario;
  public rechazo:any;
  public obj:any;

  constructor(private destinatarioService:DestinatarioService) { 
       
    this.destinatario = new Destinatario();
    this.rechazo='';

  }

  ngOnInit(): void {
      this.destinatarioService.listaBancos().subscribe(data => {

        this.rechazo = data.banks

    })

  }

  onSubmit(){
        this.destinatarioService.postData(this.destinatario).subscribe(data => {
          console.log(data);
        })
  }

}
