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
    [Route("api/teams")]
    public class TeamController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<tTeam> Get()
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return entities.tTeam.ToList();
            }
              
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public tTeam Get(int id)
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return entities.tTeam.Where(x => x.idTeam == id).FirstOrDefault();
            }
        }

    
    }
}
