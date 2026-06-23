Create Database CustomerRecordsDB;
use CustomerRecordsDB;
Create Table Records(
CustomerID Int,
 CustomerName Varchar(200),
 CustomerLocation Varchar(200),
 CustomerOrder Varchar(200)
 );
 
 Insert into Records(CustomerID, CustomerName, CustomerLocation, CustomerOrder)
 Values
 ( 089, "Lee-Shaan", "Cape Town", "Bags"),
 (070, "Titi","Durban", "Shoes"),
 (055, "Tlotli","Pretoria", "Weapons");
 
Desc Records;
select * from Records
 Where CustomerName = "Lee-Shaan"
 And CustomerID >100;
 
 SELECT * FROM Records
 Order by CustomerID desc ;