import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  appointments: Appointment[] = []; // This will hold the appointments

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.fetchAppointments(); // Fetch appointments when the component initializes
  }

  // Fetch all appointments from the backend
  fetchAppointments(): void {
    this.appointmentService.getAppointments().subscribe({
      next: (appointments) => {
        console.log('Appointments fetched:', appointments); 
        this.appointments = appointments; // Store the fetched appointments
      },
      error: (error) => {
        console.error('Error fetching appointments:', error);
      }
    });
  }
  onEdit(appointment: any): void {
   
  }

  // Delete appointment method
  onDelete(appointmentId: string): void {
    console.log('Delete appointment:', appointmentId);
    if (confirm('Are you sure you want to delete this appointment?')) {
      
      this.appointmentService.deleteAppointment(appointmentId).subscribe({
        next: () => {
          console.log('Appointment deleted');
          // Remove the deleted appointment from the list
          this.appointments = this.appointments.filter(
            (appointment) => appointment.id !== appointmentId
          );
        },
        error: (error) => {
          console.error('Error deleting appointment:', error);
        }
      });
    }
  }
}
