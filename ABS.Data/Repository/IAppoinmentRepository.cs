using ABS.Entities.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ABS.Data.Repository
{
    public interface IAppointmentRepository
    {
        Task<ICollection<Appointment>> GetAppointments();
        Task<Appointment> CreateAppointment(Appointment appointment);

        Task<bool> AppointmentExists(Guid id);
        Task<Appointment> UpdateAppointment(Appointment appointment);

        Appointment GetAppointmentById(Guid id);

        Task<bool> DeleteAppointment(Guid id);

    }
}
