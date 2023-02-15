using Angular_api.Entitites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_api.Interface
{
    public interface Istudent
    {
        Task<IEnumerable<Student>> GetDepartment();
        Task<Student> GetDepartmentByID(int ID);
        Task<Student> InsertDepartment(Student student);
        Task<Student> UpdateDepartment(Student student);
        bool DeleteDepartment(int ID);
    }
}
