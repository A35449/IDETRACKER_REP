
create table tProjectState(
	idState int primary key,
	[designation] varchar(50)
)

create table tProject(
	idProject int identity(1,1) primary key,
	idState int foreign key references tProjectState(idState) not null,
	name varchar(50) not null,
	workingSprint int default 0
)

create table tSprint (
	idSprint int identity(1,1) primary key,
	idProject int references tProject(idProject) not null,
	slot int not null,
	duration int default 3,
	startDate datetime not null
)

create table tUserType(
	idUserType int primary key,
	[description] varchar(50) not null
)

create table tUser (
	idUser int identity(1,1) primary key,
	username varchar(100) not null,
	idType int foreign key references tUserType(idUserType) not null
)

create table tTeam (
	idTeam int identity(1,1) primary key not null,
	name varchar(100) not null
)

create table tTeamAllocation (
	idUser int  references tUser(idUser) not null,
	idTeam int references tTeam(idTeam) not null,
	idProject int foreign key references tProject(idProject) not null
)

create table tTaskState(
	idState int primary key,
	designation varchar(100)
)

create table tTask (
	idTask int identity(1,1) primary key,
	idUser int foreign key references tUser(idUser) not null,
	idTaskState int references tTaskState(idState) not null,
	idSprint int references tSprint(idSprint) not null, 	
	name varchar(100) default '',
	[description] varchar(100) default '',
	lastActivity datetime,
	estimatedTime int default 0
)

--create table tTracker (
--	idTracker int identity(1,1) primary key,
--	idUser int not null foreign key references tUser(idUser)
--)

create table tTrackRecord (
	idTrackRecord int identity(1,1) primary key,
	idUser int not null foreign key references tUser(idUser),
	idTask int references tTask(idTask) not null,
	[activityStart] date,
	[activityEnd] date,
	activityTotal int,
	isRun bit default 0
)


create table tPlanning (
	idProject int foreign key references tProject(idProject) not null,
	idSprint int foreign key references tSprint(idSprint) not null,
	sprintStart datetime,
	sprintEnd datetime,
	PRIMARY KEY(idProject,idSprint)		
)

create table tEvent (
	idEvent int identity(1,1) primary key,
	[description] varchar(100)
)

insert into tUserType values (1,'Administrator'),(2,'Manager'),(3,'Developer')
insert into tUser values ('AdminAlpha', 1),('ManagerGamma', 2),('DeveloperA', 3),('DeveloperB', 3),('DeveloperC', 3),('DeveloperD', 3),('DeveloperE', 3),('DeveloperF', 3)
insert into tProjectState values(1,'Completed'),(2,'Progress'),(3,'Abort'),(4,'Upcomming')
insert into tProject values(2,'Project A',null),(2,'Project B',null),(2,'Project C',null)
insert into tTeam values ('Team A'),('Team B')
insert into tTeamAllocation values (2,1,1),(3,1,1),(4,1,1),(2,2,2),(5,2,2)
insert into tSprint values (1,1,3,'2017-05-01'),(1,2,3,'2017-05-10'),(1,3,3,'2017-05-20'),(2,1,3,'2017-05-01'),(2,2,2,'2017-05-10'),(2,3,2,'2017-05-20'),(3,1,2,'2017-05-01'),(3,2,2,'2017-05-10'),(3,3,3,'2017-05-20')
insert into tTaskState values(1,'Processing'),(2,'Completed'),(3,'Suspended'),(4,'Upcomming')

/*Sprint 1 - P1*/
insert into tTask values (3,1,1,'Task A', 'Task A description','2017-05-01',4), (3,1,1,'Task B', 'Task B description','2017-05-02',8),(3,1,1,'Task C', 'Task C description','2017-05-03',18),(3,3,1,'Task D', 'Task D description','2017-05-04',19),(3,4,1,'Task E', 'Task E description','2017-05-05',14)
/*Sprint 2 - P1*/
insert into tTask values (3,1,2,'Task A', 'Task A description','2017-05-11',2), (3,1,2,'Task B', 'Task B description','2017-05-12',4),(3,1,2,'Task C', 'Task C description','2017-05-13',8),(3,3,2,'Task D', 'Task D description','2017-05-14',10),(3,4,2,'Task E', 'Task E description','2017-05-15',20)
/*Sprint 3 - P1
//(idTask,idUser,idTaskState,idSprint,name,description,lastActivity)*/

insert into tTask values (3,1,3,'Task A', 'Task A description','2017-05-21',10), (3,1,3,'Task B', 'Task B description','2017-05-22',12),(3,1,3,'Task C', 'Task C description','2017-05-23',13),(3,3,3,'Task D', 'Task D description','2017-05-24',9),(3,4,3,'Task E', 'Task E description','2017-05-25',11)
--idTrackRecord idUser idTask [activityStart] [activityEnd] activityTotal
insert into tTrackRecord values (3,2,'2017-04-24',null, 4),(3,1,'2017-04-22',null, 8),(3,3,'2017-04-22',null, 8)
insert into tEvent values ('Nova Task#12 associada ao Projecto A'),('Nova mensagem de Manager'),('Tarefa B em pausa')

drop table tTeamAllocation
drop table tPlanning
drop table tSprint
drop table tProject
drop table tProjectState
drop table tTeam
drop table tTrackRecord
drop table tTask
drop table tTaskState
drop table tUser
drop table tUserType
drop table tEvent



