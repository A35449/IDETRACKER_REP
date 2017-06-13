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
        public IEnumerable<Model.Event> Get()
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return Model.Event.Deserialize(entities.tEvent.ToList());
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Model.Event Get(int id)
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return Model.Event.Deserialize(entities.tEvent.Where(x => x.idEvent == id).FirstOrDefault());
            }
        }
    }
}