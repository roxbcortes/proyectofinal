import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  
  public formData = {
    tarjetas:'',
    mercado:'',
    vacaciones:'',
    descuentos:'',
    cupones:'',
    cena:'',
    ropa:''
  };

  constructor() {
    const ropa = -1;
  }

  ngOnInit(): void {}
  
  guardarCliente() {}
}
