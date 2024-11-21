import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';  // HttpClient is now directly available
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router,RouterLink } from '@angular/router';
@Component({
  selector: 'app-book-appointment',
  standalone: true,  // Mark the component as standalone
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  appointmentForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,  // Inject HttpClient for making API calls,
    private router: Router
  ) {}

  ngOnInit(): void {
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
      const formData = this.appointmentForm.value;

    // Assuming you want to use today's date for the appointment time
    const today = new Date();
    const appointmentTime = formData.AppointmentTime;

    // Convert selected time into a DateTime object
    const timeParts = appointmentTime.split(' ');
    const timeArray = timeParts[0].split(':');
    let hour = parseInt(timeArray[0]);
    const minute = parseInt(timeArray[1]);
    const ampm = timeParts[1];

    // Adjust hour for AM/PM
    if (ampm === 'PM' && hour < 12) {
      hour += 12;
    } else if (ampm === 'AM' && hour === 12) {
      hour = 0; // Midnight case
    }

    // Set the appointment time to the new date object
    today.setHours(hour);
    today.setMinutes(minute);

    // Assign the date to AppointmentTime in ISO format
    formData.AppointmentTime = new Date(today).toISOString();

      console.log('Appointment details:', this.appointmentForm.value);
      // Make an HTTP request to the backend
      this.http.post('https://localhost:7250/api/Appointment', this.appointmentForm.value)
        .subscribe({
          next: (response) => {
           this.router.navigate(['/']);
          },
          error: (error) => {
            console.error('Error booking appointment', error);
          }
        });
    } else {
      console.error('Form is not valid');
    }
  }
}
