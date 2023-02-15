using Angular_api.Entitites;
using Angular_api.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_api.Repository
{
    public class StudentRepo:Istudent
    {
        private readonly StudContext _appDBContext;
        public StudentRepo(StudContext context)
        {
            _appDBContext = context ??
                throw new ArgumentNullException(nameof(context));
        }
        public async Task<IEnumerable<Student>> GetDepartment()
        {
            return await _appDBContext.Students.ToListAsync();
        }
        public async Task<Student> GetDepartmentByID(int ID)
        {
            return await _appDBContext.Students.FindAsync(ID);
        }
        public async Task<Student> InsertDepartment(Student objDepartment)
        {
            _appDBContext.Students.Add(objDepartment);
            await _appDBContext.SaveChangesAsync();
            return objDepartment;
        }
        public async Task<Student> UpdateDepartment(Student objDepartment)
        {
            _appDBContext.Entry(objDepartment).State = EntityState.Modified;
            await _appDBContext.SaveChangesAsync();
            return objDepartment;
        }
        public bool DeleteDepartment(int ID)
        {
            bool result = false;
            var department = _appDBContext.Students.Find(ID);
            if (department != null)
            {
                _appDBContext.Entry(department).State = EntityState.Deleted;
                _appDBContext.SaveChanges();
                result = true;
            }
            else
            {
                result = false;
            }
            return result;
        }
    }
}
