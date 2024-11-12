using ABS.Entities.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ABS.Data.Repository
{
    public interface IAppoinmentRepository
    {
        Task<ICollection<Appointment>> GetAppointmentsAsync();
        Task<Appointment> CreateAppointment(Appointment appointment);

        bool AppointmentExists(Guid id);
        Task<Appointment> UpdateAppointment(Appointment appointment);

        Task<Appointment> GetAppointmentById(Guid id);
    }
}
