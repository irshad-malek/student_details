using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_api.Entitites
{
    public class StudContext: DbContext
    {
        public StudContext(DbContextOptions<StudContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Student> Students { get; set; }
    }
}
