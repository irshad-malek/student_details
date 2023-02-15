using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_api.Entitites
{
    public class Student
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        [Column(TypeName = "varchar(50)")]
        public string name { get; set; }

        public long mobile_No { get; set; }
        [Column(TypeName = "varchar(250)")]
        public string email_Id { get; set; }
        [Column(TypeName = "varchar(max)")]
        public string address { get; set; }

        public long pincode { get; set; }


    }
}
