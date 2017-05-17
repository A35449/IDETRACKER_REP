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
    [Route("api/sprints")]
    public class SprintController : Controller
    {

        [HttpGet]
        public IEnumerable<Sprint> Get()
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return Sprint.Deserialize(entities.tSprint.ToList());
            }

        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Sprint Get(int id)
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return Sprint.Deserialize(entities.tSprint.Where(x => x.idSprint == id).FirstOrDefault());
            }
        }

    }
}
