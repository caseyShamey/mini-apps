drop database if exists checkout;
create database checkout;

use checkout;

drop table if exists user;

create table user (
  id int not null auto_increment,
  firstName varchar(20) not null,
  lastName varchar(20) not null,
  email varchar(50) not null,
  password varchar(20) not null,
  streetAddress varchar(50) not null,
  cityStateZip varchar(50) not null,
  phoneNum varchar(10) not null,
  ccNum varchar(16) not null,
  expirDate varchar(7) not null,
  zip varchar(5) not null,
  primary key (id, email)
);

