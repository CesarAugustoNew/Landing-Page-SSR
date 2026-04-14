import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'new-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.scss',
})
export class NewFormComponent {
  newForm!: FormGroup;

  constructor() {
    this.newForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    console.log(this.newForm.value);
  }
}
