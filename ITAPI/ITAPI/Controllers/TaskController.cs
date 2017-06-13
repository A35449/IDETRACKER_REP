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
    [Route("api/tasks")]
    public class TaskController : Controller
    {

        [HttpGet]
        public IEnumerable<Model.Task> Get()
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return Model.Task.Deserialize(entities.tTask.ToList());
            }

        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Model.Task Get(int id)
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return Model.Task.Deserialize(entities.tTask.Where(x => x.idTask == id).FirstOrDefault());
            }
        }

        [HttpGet("user/{id}")]
        public List<Model.Task> GetByUser(int id)
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return Model.Task.Deserialize(entities.tTask.Where(x => x.idUser == id).ToList());
            }
        }

        [HttpGet("user/{idUser}/sprint/{idSprint}")]
        public List<Model.Task> GetByUserSprint(int idUser, int idSprint)
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                var select_users = entities.tTask.Include("tSprint").Where(x => x.idUser == idUser && x.idSprint == idSprint);
                return Model.Task.Deserialize(select_users.ToList());
            }
        }
    }
}
