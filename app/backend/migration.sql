CREATE DATABASE db;

USE db;

CREATE TABLE people (
  id INT NOT NULL auto_increment,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  participation INT NOT NULL,
  PRIMARY KEY(id)
) ENGINE=INNODB;
