using ABS.Data.Data;
using ABS.Data.Repository;
using ABS.Entities.Model;
using Microsoft.AspNetCore.Http.HttpResults;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace ABS.Logic.Logic
{
   public class AppointmentLogic:IAppointmentLogic
    {
        private readonly IAppointmentRepository _appointmentRepository;
        private readonly DataContext _context;
        public AppointmentLogic(IAppointmentRepository appointmentRepository, DataContext dataContext) {
            _appointmentRepository = appointmentRepository;
            _context = dataContext;
        }
       /* public List<AppointmentLogic> GetAppointmentsList()
        {
            List<AppointmentLogic> appointments = new List<AppointmentLogic>();
            appointments = (List<AppointmentLogic>)_appointmentRepository.GetAppointments();
            return appointments;
        }*/


        public async Task<ICollection<Appointment>> GetAppointmentAsync()
        {
            return await _appointmentRepository.GetAppointments();
        }
        
        public async Task<Appointment> CreateAppointment(Appointment appointment)
        {
            return await _appointmentRepository.CreateAppointment(appointment);
        }

        public Appointment GetAppointmentById(Guid id)
        {
            return _appointmentRepository.GetAppointmentById(id);
        }
        public async Task<Appointment> UpdateAppointment(Appointment appointment)
        {
            
            return await _appointmentRepository.UpdateAppointment(appointment);
        }

        public async Task<bool> DeleteAppointment(Guid id)
        {
            if (!await _appointmentRepository.AppointmentExists(id))
            {
                throw new KeyNotFoundException("Appointment not found.");
            }
            return await _appointmentRepository.DeleteAppointment(id);
        }

    }
}
