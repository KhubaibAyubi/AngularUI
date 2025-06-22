import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Header } from '../shared/header/header';
@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,Header],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
selectedTila: string = 'luonnos';
  
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // Handle form submission
    console.log('Form submitted');
  }

  onCancel() {
    // Handle form cancellation
    console.log('Form cancelled');
  }
}



