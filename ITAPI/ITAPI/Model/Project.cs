using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITAPI.Model
{
    public class Project
    {
        public string name { get; set; }
        public int idProject { get; set; }
        public int workingSprint { get; set; }

        public static Project Deserialize(tProject p)
        {
            var obj = new Project();
            obj.idProject = p.idProject;
            obj.name = p.name;
            obj.workingSprint = p.workingSprint.HasValue ? p.workingSprint.Value : 0;
            return obj;
        }

        public static List<Project> Deserialize(List<tProject> list)
        {
            List<Project> ret = new List<Project>();
            foreach (tProject p in list)
            {
                ret.Add(Deserialize(p));
            }
            return ret;
        }
    }
}
