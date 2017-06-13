using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DAL;
using ITAPI.Model;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ITAPI.Controllers
{
    // Atributo para mapear URI
    [Route("api/projects")]
    public class ProjectController : Controller
    {
        // GET: api/projects retorna todos os projectos
        [HttpGet]
        public IEnumerable<Project> Get()
        {
            // Instância do Contexto da Entity Framework 
            using (ITDbEntities entities = new ITDbEntities())
            {
                return Project.Deserialize(entities.tProject.ToList());
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Project Get(int id)
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return Project.Deserialize(entities.tProject.Where(x => x.idProject == id).FirstOrDefault());
                
            }
        }

        //[HttpGet("slots/{id}")]
        //public IEnumerable<ProjectSlots> GetSlots(int id)
        //{
        //    using (ITDbEntities entities = new ITDbEntities())
        //    {
        //        return ProjectSlots.Deserialize(entities.tSprint.Include("tProject").Where(x => x.idProject == id).GroupBy(x => x.idProject).ToList());

        //    }
        //}

    }
}
