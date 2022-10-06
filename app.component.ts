import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public formulario: NgForm;
  public formData = {
    nombre: '', 
    documento: '',
    date: '',
    email: '',
    clave: '',
    arriendo: '',
    salario: '',
    ingresos: '',
    Gmensuales: '',
    GHogar: '',
    GFinancieros: '',
    ACargo: '',
    proposito: '',
    ahorro: '',
    tipoVivienda:'',
    mTransporte:'',
    tipoContrato:'' 
};

  constructor() {
    this.formulario = new NgForm([], []);
  }

  ngOnInit(): void {}

  guardarCliente(): void {
    console.log(this.formData);
  }
}
