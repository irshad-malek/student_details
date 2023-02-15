using Angular_api.Entitites;
using Angular_api.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApiController : ControllerBase
    {
        private readonly Istudent _department;
        private readonly StudContext context;

        public ApiController(Istudent department, StudContext _context)
        {
            _department = department ??
                throw new ArgumentNullException(nameof(department));
            context = _context;
        }
        [HttpGet]
        //[Route("GetDepartment")]
        public async Task<IActionResult> Get()
        {
            return Ok(await _department.GetDepartment());
        }
        [HttpGet]
        [Route("getStudentById/{Id}")]
        public async Task<IActionResult> GetDeptById(int Id)
        {
            return Ok(await _department.GetDepartmentByID(Id));
        }
        [HttpGet]
        [Route("Email_Id/{Email}/{id}")]
        public async Task<IActionResult> GetDeptById1(string Email,int id) 
        {

            bool isValid = this.context.Students.ToList().Exists(p => p.email_Id.Equals(Email, StringComparison.CurrentCultureIgnoreCase)&& p.id!=id);
            return new JsonResult(isValid);
            //return Ok(await _department.GetDepartmentByID(Id));
        }
        [HttpPost]
        [Route("AddStudent")]
        public async Task<IActionResult> Post(Student stud)
        {
            var result = await _department.InsertDepartment(stud);
            if (result.id == 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
            }
            return Ok();
        }
        //[HttpPost]
        //public IActionResult studAdd(Student std)
        //{
        //    context.Students.Add(std);
        //    context.SaveChanges();
        //    return Ok(std);

        //}
        [HttpPut]
        [Route("Update/{id}")]
        public async Task<IActionResult> Put(Student stud)
        {
            await _department.UpdateDepartment(stud);
            return Ok();
        }
        [HttpDelete]
        //[HttpDelete("{id}")]
        [Route("Delete/{Id}")]
        public JsonResult Delete(int id)
        {
            _department.DeleteDepartment(id);
            return new JsonResult("Deleted Successfully");
        }
    }
}
