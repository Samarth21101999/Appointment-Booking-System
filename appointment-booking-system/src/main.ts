import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes'; // Import routes
import { HttpClient, HttpClientModule } from '@angular/common/http';  // Directly use HttpClient for your HTTP operations
import { AppointmentService } from './app/services/appointment.service';
import { DatePipe } from '@angular/common';
// Bootstrap the application with routing and HttpClient
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes),  // Enable routing
      HttpClientModule
    ),
    AppointmentService,  // Inject AppointmentService for HTTP operations
     DatePipe,
  ],
}).catch((err) => console.error(err));
