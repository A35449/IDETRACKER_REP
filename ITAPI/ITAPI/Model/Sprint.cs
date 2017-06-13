﻿using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITAPI.Model
{
    public class Sprint
    {
 
        public int idSprint { get; set; }
        public int idProject { get; set; }
        public int slot { get; set; }
        public int duration { get; set; }
        public DateTime startDate { get; set; }

        public static Sprint Deserialize(tSprint p)
        {
            var obj = new Sprint();
            obj.idSprint = p.idSprint;
            obj.idProject = p.idProject;
            obj.slot = p.slot;
            obj.duration = p.duration.HasValue ? p.duration.Value : 0;
            obj.startDate = p.startDate;
            return obj;
        }

        public static List<Sprint> Deserialize(List<tSprint> list)
        {
            List<Sprint> ret = new List<Sprint>();
            foreach (tSprint p in list)
            {
                ret.Add(Deserialize(p));
            }
            return ret;
        }
    }
}
