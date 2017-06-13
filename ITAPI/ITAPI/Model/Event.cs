using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITAPI.Model
{
    public class Event
    {
        public int idEvent { get; set; }
        public string description { get; set; }

        public static Event Deserialize(tEvent t)
        {
            var obj = new Event();
            obj.idEvent = t.idEvent;
            obj.description = t.description;

            return obj;
        }

        public static List<Event> Deserialize(List<tEvent> list)
        {
            List<Event> ret = new List<Event>();
            foreach (tEvent p in list)
            {
                ret.Add(Deserialize(p));
            }
            return ret;
        }
    }
}
