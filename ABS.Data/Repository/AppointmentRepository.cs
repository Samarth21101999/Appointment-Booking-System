using ABS.Data.Data;
using ABS.Entities.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ABS.Data.Repository
{
    public class AppointmentRepository : IAppointmentRepository
    {
        private readonly DataContext _context;
        public AppointmentRepository(DataContext dataContext) {
            _context = dataContext;
        }

        // GetAppointments() method is used to get all appointments from the database
        public async Task<ICollection<Appointment>> GetAppointments()
        {
            return await _context.Appointments.ToListAsync();
        }

        // CreateAppointment() method is used to create a new appointment in the database
        public async Task<Appointment> CreateAppointment(Appointment appointment)
        {
            _context.Add(appointment);
            await _context.SaveChangesAsync();
            return appointment;
        }

        // GetAppointmentById() method is used to get a specific appointment by its id
        public Appointment GetAppointmentById(Guid id)
        {
            return  _context.Appointments.Where(a => a.Id == id).FirstOrDefault();
        }

        // AppointmentExists() method is used to check if an appointment exists in the database
        public async Task<bool> AppointmentExists(Guid id)
        {
            return await _context.Appointments.FindAsync(id) != null;
        }

        // UpdateAppointment() method is used to update an appointment in the database
        public async Task<Appointment> UpdateAppointment(Appointment appointment)
        {
            /*var apointmentToUpdate=await _context.Appointments.FindAsync(appointment.Id);

            if (apointmentToUpdate == null)
            {
                throw new KeyNotFoundException("Appointment not found.");
            }*/

            _context.Update(appointment);
            await _context.SaveChangesAsync();
            return appointment;
        }

        public async Task<bool> DeleteAppointment(Guid id)
        {
            var appointment = GetAppointmentById(id);
            _context.Remove(appointment);
              await _context.SaveChangesAsync();
            return true;
        }

        
    }
}
