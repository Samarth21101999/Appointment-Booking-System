import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';  // For routing
import { CommonModule } from '@angular/common';  // Common Angular directives
import { FormsModule } from '@angular/forms';  // For two-way data binding
import { HomeComponent } from './home/home.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book-appointment', component: BookAppointmentComponent },
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'appointment-booking-system';
}
