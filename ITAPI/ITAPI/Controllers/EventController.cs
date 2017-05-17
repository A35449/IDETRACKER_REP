using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DAL;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ITAPI.Controllers
{
    [Route("api/events")]
    public class EventController : Controller
    {
     
       [HttpGet]
        public IEnumerable<tEvent> Get()
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return entities.tEvent.ToList();
            }

        }

        // GET api/values/5
        [HttpGet("{id}")]
        public tEvent Get(int id)
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return entities.tEvent.Where(x => x.idEvent == id).FirstOrDefault();
            }
        }

    }
}