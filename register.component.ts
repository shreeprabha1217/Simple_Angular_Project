import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      age: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      country: ['', Validators.required],
      r1: ['', Validators.required],
      hobby1: ['', Validators.required],
      hobby2: ['', Validators.required],
      hobby3: ['', Validators.required],
      hobby4: ['', Validators.required],
      hobby5: ['', Validators.required],
    });
  }

  onSubmit() {
    if (true) {
      const formData = this.registerForm.value;
      console.log('Form Data:', JSON.stringify(formData));
    }
  }
}
