using DAL;
using ITAPI.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITAPI.Controllers
{
    [Route("api/tracks")]
    public class TrackerController : Controller
    {

        [HttpGet]
        public IEnumerable<Model.TrackRecord> Get()
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return Model.TrackRecord.Deserialize(entities.tTrackRecord.ToList());
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Model.TrackRecord Get(int id)
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return Model.TrackRecord.Deserialize(entities.tTrackRecord.Where(x => x.idTask == id).FirstOrDefault());
            }
        }

        [HttpGet("user/{id}")]
        public List<Model.TrackRecord> GetByUser(int id)
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                return Model.TrackRecord.Deserialize(entities.tTrackRecord.Where(x => x.idUser == id).ToList());
            }
        }

        [HttpPost("{id}")]
        public void Update(int id)
        {
            using (ITDbEntities entities = new ITDbEntities())
            {
                var trackRecord = entities.tTrackRecord.Where(x => x.idTask == id).FirstOrDefault();
                var now = DateTime.Now;
                if (trackRecord == null) return;
                trackRecord.activityTotal += (int) (now.Subtract(trackRecord.activityStart.HasValue ? trackRecord.activityStart.Value : now)).TotalSeconds;
                trackRecord.activityStart = now;
                entities.SaveChanges();
                return;
            }
        }

        //[HttpPost]
        //public void Update([FromBody]Model.TrackRecord record)
        //{
        //    using (ITDbEntities entities = new ITDbEntities())
        //    {
        //        var trackRecord = entities.tTrackRecord.Find(record.idTracRecord);
        //        trackRecord.activityTotal = record.activityTotal;
        //        trackRecord.activityEnd = record.activityEnd;
        //        trackRecord.activityStart = record.activityStart;
        //        entities.SaveChanges();
        //    }
        //}
    }
}
