using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITAPI.Model
{
    public class Breakdown
    {
        public string[] labels { get; set; }
        public int[][] series { get; set; }

        public Breakdown()
        {

        }

        public Breakdown set(List<tTask> tasks, DateTime start, int duration)
        {
            var labelsList = new List<string>();

            List<int[]> ret = new List<int[]>();
            List<int> values = new List<int>();
            List<int> result = new List<int>();
            DateTime[] weeks = new DateTime[duration + 1];
            weeks[0] = start;
            labelsList.Add("W0");

            for (int i = 1; i < weeks.Count(); i++)
            {
                weeks[i] = weeks[i - 1];
                var nextD = weeks[i].AddDays(7);
                weeks[i] = nextD;
                labelsList.Add("W" + (i));
            }

           var currWeek = weeks[0];
           var val = 0;
           var total = 0;


           foreach(var task in tasks)
           {
                total += task.estimatedTime.HasValue ? task.estimatedTime.Value : 0;
                if(task.idTaskState == (int)Task.TaskState.Completed || task.idTaskState == (int)Task.TaskState.Processing)
                {
                    val += task.estimatedTime.HasValue ? task.estimatedTime.Value : 0; 
                    if (task.lastActivity.HasValue && task.lastActivity >= currWeek)
                    {
                        values.Add(val);
                        val = 0;
                    }
                }
           }

            result.Insert(0, total);
            foreach (var v in values)
            {
                result.Add(result.Last() - v);
            }
           
           //if (val != 0) values.Add(val);
           ret.Add(result.ToArray());
           series = ret.ToArray();
           labels = labelsList.ToArray();
           return this;
        }
    }
}
