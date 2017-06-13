using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITAPI.Model
{
    public class TrackRecord
    {
        public int idTracRecord { get; set; }
        public int idUser { get; set; }
        public int idTask { get; set; }
        public DateTime activityStart { get; set; }
        public DateTime activityEnd { get; set; }
        public int activityTotal { get; set; }
        public bool isRun { get; set; }

        public static TrackRecord Deserialize(tTrackRecord t)
        {
            var obj = new TrackRecord();
            obj.idTracRecord = t.idTrackRecord;
            obj.idUser = t.idUser;
            obj.idTask = t.idTask;
            obj.activityStart = t.activityStart.Value;
            obj.activityEnd = t.activityEnd.HasValue ? t.activityEnd.Value : new DateTime();
            obj.activityTotal = t.activityTotal.HasValue ? t.activityTotal.Value : 0;
            obj.isRun = t.isRun.HasValue ? t.isRun.Value : false;
            //obj.hours = t.hours.HasValue ? t.hours.Value : 0;

            return obj;
        }

        //public static tTrackRecord Serialize(TrackRecord r)
        //{
        //    tTrackRecord ret = new tTrackRecord();
        //}

        public static List<TrackRecord> Deserialize(List<tTrackRecord> list)
        {
            List<TrackRecord> ret = new List<TrackRecord>();
            foreach (tTrackRecord p in list)
            {
                ret.Add(Deserialize(p));
            }
            return ret;
        }
    }
}
