import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component.formulario',
  templateUrl: './component.formulario.component.html',
  styleUrls: ['./component.formulario.component.css']
})
export class ComponentFormularioComponent implements OnInit {
  

  constructor() {
    this.formData.ropa ='';
  }

  ngOnInit(): void {
  }

}
