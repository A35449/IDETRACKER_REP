using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DAL;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ITWebAPI.Controllers
{
    [Route("api/projects")]
    public class ProjectController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<tProject> Get()
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return entities.tProject.ToList();
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public tProject Get(int id)
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return entities.tProject.Where(x => x.idProject == id).FirstOrDefault();
            }
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
