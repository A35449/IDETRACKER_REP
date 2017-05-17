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
    [Route("api/users")]
    public class UserController : Controller
    {
        [HttpGet]
        public IEnumerable<_User> Get()
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return _User.Deserialize(entities.tUser.ToList());
            }

        }

        // GET api/values/5
        [HttpGet("id/{id}")]
        public _User Get(int id)
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return _User.Deserialize(entities.tUser.Where(x => x.idUser == id).FirstOrDefault());
            }
        }

        [HttpGet("username/{username}")]
        public _User Get(string username)
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return _User.Deserialize(entities.tUser.Where(x => x.username == username).FirstOrDefault());
            }
        }
    }
}
