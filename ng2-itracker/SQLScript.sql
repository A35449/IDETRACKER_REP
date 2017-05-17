
create table tProjectState(
	idState int primary key,
	[designation] varchar(50)
)

create table tProject(
	idProject int identity(1,1) primary key,
	idState int foreign key references tProjectState(idState) not null,
	name varchar(50) not null
)

create table tSprint (
	idSprint int identity(1,1) primary key,
	idProject int references tProject(idProject) not null,
	slot int not null
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
	name varchar(100),
	[description] varchar(100),
	lastActivity datetime,
)

create table tTracker (
	idTracker int identity(1,1) primary key,
	idUser int not null foreign key references tUser(idUser)
)

create table tTrackRecord (
	idTrackRecord int identity(1,1) primary key,
	idTracker int foreign key references tTracker(idTracker) not null,
	idTask int references tTask(idTask) not null,
	[activityStart] date,
	[activityEnd] date,
	activityTotal int
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
insert into tUser values ('AdminAlpha', 1),('ManagerGamma', 2),('DeveloperA', 3),('DeveloperB', 3),('DeveloperC', 3)
insert into tProjectState values(1,'Pending'),(2,'Active'),(3,'Suspend'),(4,'Abort')
insert into tProject values(2,'Project A'),(2,'Project B'),(2,'Project C')
insert into tTeam values ('Team A'),('Team B')
insert into tTeamAllocation values (2,1,1),(3,1,1),(4,1,1),(2,2,2),(5,2,2)
insert into tSprint values (1,1),(1,2),(1,3),(2,1),(2,2),(2,3),(3,1),(3,2),(3,3)
insert into tTaskState values (1,'Processing'),(2,'Completed'),(3,'Suspended'),(4,'Upcomming')
insert into tTask values (3,1,'Task A', 'Task A description',null), (3,1,'Task B', 'Task B description',null),(3,1,'Task C', 'Task C description',null),(3,3,'Task D', 'Task D description',null),(3,4,'Task E', 'Task E description',null)
insert into tTracker values (3)
insert into tTrackRecord values (1,2,'2017-04-24',null, 4),(1,1,'2017-04-22',null, 8)
insert into tEvent values ('Nova Task#12 associada ao Projecto A'),('Nova mensagem de Manager'),('Tarefa B em pausa')


drop table tTeamAllocation
drop table tPlanning
drop table tSprint
drop table tProject
drop table tProjectState
drop table tTeam
drop table tTrackRecord
drop table tTracker
drop table tTask
drop table tTaskState
drop table tUser
drop table tUserType
drop table tEvent

