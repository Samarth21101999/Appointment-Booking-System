using ABS.Entities.Model;

namespace ABS.Logic.Logic
{
    public interface IAppointmentLogic
    {
        Task<ICollection<Appointment>> GetAppointmentAsync();

        Task<Appointment> CreateAppointment(Appointment appointment);

        Task<Appointment> UpdateAppointment(Appointment appointment);

        Task<Appointment> GetAppointmentById(Guid id);
    }
}
