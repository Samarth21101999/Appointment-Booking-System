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
    public class AppointmentRepository
    {
        private readonly DataContext _context;
        public AppointmentRepository(DataContext dataContext) {
            _context = dataContext;
        }

        // This method is used to get all appointments
        public async Task<ICollection<Appointment>> GetAppointments()
        {
            return await _context.Appointments.ToListAsync();
        }

        public async Task<Appointment> CreateAppointment(Appointment appointment)
        {
              _context.Add(appointment);
             await _context.SaveChangesAsync();
            return appointment; 
        }

        public async Task<Appointment> GetAppointmentById(Guid id)
        {
            return await _context.Appointments.FindAsync(id);
        }
        public bool AppointmentExists(Guid id)
        {
            return _context.Appointments.Any(a => a.Id == id);
        }



        public async Task<Appointment> UpdateAppointment(Appointment appointment)
        {
            _context.Update(appointment);
            await _context.SaveChangesAsync();
            return appointment;
        }
    }
}
