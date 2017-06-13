using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITAPI.Model
{
    public class ProjectSlots
    {
        public int idProject { get; set; }
        public string name { get; set; }
        public int idSprint { get; set; }

        public static ProjectSlots Deserialize(tSprint p)
        {
            var obj = new ProjectSlots();
            obj.idProject = p.tProject.idProject;
            obj.name = p.tProject.name;
            obj.idSprint = p.idSprint;
            return obj;
        }

        public static List<ProjectSlots> Deserialize(List<tSprint> list)
        {
            List<ProjectSlots> ret = new List<ProjectSlots>();
            foreach (tSprint p in list)
            {
                ret.Add(Deserialize(p));
            }
            return ret;
        }

        //public static List<ProjectSlots> Deserialize(List<IGrouping<int, tSprint>> list)
        //{
        //    List<ProjectSlots> pjs = new List<ProjectSlots>();
        //    foreach(var group in list)
        //    {
        //        foreach(var entry in group)
        //        {
        //            var _new = new ProjectSlots();
        //            _new.idProject = group.Key;
        //            _new.idSprint = entry.idSprint;
        //            _new.name = 
        //            pjs.Add(_new)
        //        }
        //    }
        //}
    }
}
