using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ABS.Entities.Model
{
    public class Appointment
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string Email { get; set; }

        public string AppointmentType { get; set; }

        public DateTime AppointmentTime { get; set; }
    }
}
