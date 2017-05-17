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
    [Route("api/events")]
    public class TaskController : Controller
    {

        [HttpGet]
        public IEnumerable<tTask> Get()
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return entities.tTask.ToList();
            }

        }

        // GET api/values/5
        [HttpGet("{id}")]
        public tTask Get(int id)
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return entities.tTask.Where(x => x.idTask == id).FirstOrDefault();
            }
        }

    }
}
