import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';
import { sign } from 'crypto';

@Component({
  selector: 'new-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers: [NewsletterService],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.scss',
})
export class NewFormComponent {
  newForm!: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService) {
    this.newForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.loading.set(true);
    if (this.newForm.valid) {
      this.service
        .sendData(this.newForm.value.name, this.newForm.value.email)
        .subscribe({
          next: () => {
            this.newForm.reset();
          },
        });
    }
  }
}
