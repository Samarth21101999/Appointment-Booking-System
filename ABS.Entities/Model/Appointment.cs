using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ABS.Entities.Model
{
    public class Appointment
    {
        [Key]
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string Email { get; set; }
        public ulong PhoneNumber { get; set; }

        public string AppointmentType { get; set; }

        public string Comment { get; set; }

        public DateTime AppointmentTime { get; set; }
    }
}
