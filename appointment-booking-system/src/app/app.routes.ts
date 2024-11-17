import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'book-appointment', component: BookAppointmentComponent },
    { path: 'edit-appointment/:id', component: EditAppointmentComponent }
];
