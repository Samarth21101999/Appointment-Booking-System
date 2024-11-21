import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';
import { DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-edit-appointment',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css'],
})
export class EditAppointmentComponent implements OnInit {
  appointmentForm!: FormGroup;
  appointmentId!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private router: Router,
    private dataPipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.appointmentId = this.route.snapshot.paramMap.get('id')!;

    this.appointmentService.getAppointmentById(this.appointmentId).subscribe({
    
      next: (appointment) => {
        // Populate the form with existing appointment data
        this.appointmentForm.patchValue({
          FirstName: appointment.firstName,
          LastName: appointment.lastName,
          Email: appointment.email,
          PhoneNumber: appointment.phoneNumber,
          AppointmentType: appointment.appointmentType,
          Comment: appointment.comment,
          AppointmentTime: appointment.appointmentTime,
        });
      },
      error: (err) => console.error('Error fetching appointment:', err),
    });

    // Initialize the form
    this.appointmentForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.maxLength(50)]],
      LastName: ['', [Validators.required, Validators.maxLength(50)]],
      Email: ['', [Validators.required, Validators.email]],
      PhoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      AppointmentType: ['', Validators.required],
      Comment: [''],
      AppointmentTime: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      
      const updatedAppointment = { ...this.appointmentForm.value, id: this.appointmentId };


      this.appointmentService.editAppointment(this.appointmentId,updatedAppointment).subscribe({
        next: () => {
          alert('Appointment updated successfully!');
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Error updating appointment:', err),
      });
    }
  }
}
