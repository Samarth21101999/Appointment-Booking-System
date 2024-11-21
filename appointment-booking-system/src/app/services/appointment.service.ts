import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root' // This makes the service available throughout the app without needing to add it to providers
})
export class AppointmentService {
  private apiUrl = 'https://localhost:7250/api/Appointment'; // Replace with your ASP.NET API URL

  constructor(private http: HttpClient) {}

  // Fetch all appointments
  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAppointmentById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);    
  }

  // Add a new appointment
  createAppointment(appointmentData: any): Observable<any> {
    return this.http.post(this.apiUrl, appointmentData);  // Send POST request to backend
  }

  // Edit an existing appointment
  editAppointment(id: string, appointment: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, appointment);
  }

  // Delete an appointment
  deleteAppointment(appointmentId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${appointmentId}`);
  }
}
