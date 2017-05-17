using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITAPI.Model
{
    public class _User
    {
        public int idUser { get; set; }
        public string username { get; set; }
        public string password { get; set; }

        public static _User Deserialize(tUser t)
        {
            var obj = new _User();
            obj.idUser = t.idUser;
            obj.username = t.username;
            obj.password = "bios";

            return obj;
        }

        public static List<_User> Deserialize(List<tUser> list)
        {
            List<_User> ret = new List<_User>();
            foreach (tUser p in list)
            {
                ret.Add(Deserialize(p));
            }
            return ret;
        }
    }
}
