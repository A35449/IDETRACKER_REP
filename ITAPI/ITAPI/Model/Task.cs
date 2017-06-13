using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITAPI.Model
{
    public class Task
    {
        public int idTask { get; set; }
        public int idUser { get; set; }
        public int idSprint { get; set; }
        public int idTaskState { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string lastActivity { get; set; }
        //public int hours { get; set; }

        public enum TaskState{
            Completed = 1,
            Processing = 2,
            Abort = 3,
            Upcomming = 4
        }

        public static Task Deserialize(tTask t)
        {
            var obj = new Task();
            obj.idUser = t.idUser;
            obj.idTaskState = t.idTaskState;
            obj.idTask = t.idTask;
            obj.idSprint = t.tSprint.idSprint;
            obj.name = t.name;
            obj.description = t.description;
            obj.lastActivity = t.lastActivity.HasValue ? t.lastActivity.Value.ToShortDateString() : "2017-05-20";
            //obj.hours = t.hours.HasValue ? t.hours.Value : 0;

            return obj;
        }

        public static List<Task> Deserialize(List<tTask> list)
        {
            List<Task> ret = new List<Task>();
            foreach (tTask p in list)
            {
                ret.Add(Deserialize(p));
            }
            return ret;
        }
    }
}
