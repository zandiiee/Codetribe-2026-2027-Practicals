Create Database CustomerRecordsDB;
use CustomerRecordsDB;
Create Table Records(
CustomerID Int,
 CustomerName Varchar(200),
 CustomerLocation Varchar(200),
 CustomerOrder Varchar(200)
 );
 
Desc Records;
select * from Records
 Where CustomerName = "John"
 And CustomerID >100;
 
 SELECT * FROM Records
 Order by CustomerID desc 
 LIMIT  10;