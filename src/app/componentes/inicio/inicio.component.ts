import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  formularioForm;

  constructor(private formbuilder: FormBuilder){
    this.formularioForm = this.formbuilder.group({
      nombre: '',
      apellido: ''
    })
  }
  ngOInit() {
    console.log("hola")
  }

  enviardatos(){
    let datos_formulario = this.formularioForm.value;
    console.log(this.formularioForm.value)
  }
}
