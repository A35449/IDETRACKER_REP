﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class ITDbEntities : DbContext
    {
        public ITDbEntities()
            : base("name=ITDbEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<tProjectState> tProjectState { get; set; }
        public virtual DbSet<tSprint> tSprint { get; set; }
        public virtual DbSet<tUserType> tUserType { get; set; }
        public virtual DbSet<tEvent> tEvent { get; set; }
        public virtual DbSet<tPlanning> tPlanning { get; set; }
        public virtual DbSet<tProject> tProject { get; set; }
        public virtual DbSet<tTask> tTask { get; set; }
        public virtual DbSet<tTaskState> tTaskState { get; set; }
        public virtual DbSet<tTeam> tTeam { get; set; }
        public virtual DbSet<tUser> tUser { get; set; }
        public virtual DbSet<tTeamAllocation> tTeamAllocation { get; set; }
        public virtual DbSet<tTrackRecord> tTrackRecord { get; set; }
    }
}
