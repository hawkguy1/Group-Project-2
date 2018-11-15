CREATE DATABASE availability_db;

-- MEXICAN RESTAURANT AVAILABILITY TABLE --
USE availability_db;
CREATE TABLE mexican_availability
(
id INTEGER AUTO_INCREMENT,
topsize VARCHAR (15),
t530 INTEGER,
t600 INTEGER,
t630 INTEGER,
t700 INTEGER,
t730 INTEGER,
t800 INTEGER,
PRIMARY KEY(id)
);
INSERT INTO mexican_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("twoTops", 8, 4, 2, 1, 2, 6);
INSERT INTO mexican_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("fourTops", 8, 3, 1, 0, 3, 6);
INSERT INTO mexican_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("sixTops", 4, 3, 2, 1, 2, 2);
INSERT INTO mexican_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("eightTops", 2, 2, 1, 0, 0, 2);
SELECT * FROM mexican_availability;

-- CHINESE RESTAURANT AVAILABILITY TABLE --
USE availability_db;
CREATE TABLE chinese_availability
(
id INTEGER AUTO_INCREMENT,
topsize VARCHAR (15),
t530 INTEGER,
t600 INTEGER,
t630 INTEGER,
t700 INTEGER,
t730 INTEGER,
t800 INTEGER,
PRIMARY KEY(id)
);
INSERT INTO chinese_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("twoTops", 10, 5, 1, 0, 1, 6);
INSERT INTO chinese_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("fourTops", 8, 3, 1, 0, 3, 3);
INSERT INTO chinese_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("sixTops", 4, 3, 2, 0, 2, 3);
INSERT INTO chinese_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("eightTops", 2, 1, 0, 0, 0, 1);
SELECT * FROM chinese_availability;

-- ITALIAN RESTAURANT AVAILABILITY TABLE --
USE availability_db;
CREATE TABLE italian_availability
(
id INTEGER AUTO_INCREMENT,
topsize VARCHAR (15),
t530 INTEGER,
t600 INTEGER,
t630 INTEGER,
t700 INTEGER,
t730 INTEGER,
t800 INTEGER,
PRIMARY KEY(id)
);
INSERT INTO italian_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("twoTops", 10, 6, 3, 2, 1, 6);
INSERT INTO italian_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("fourTops", 8, 3, 4, 2, 3, 3);
INSERT INTO italian_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("sixTops", 6, 4, 2, 0, 2, 3);
INSERT INTO italian_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("eightTops", 4, 3, 1, 0, 0, 1);
SELECT * FROM italian_availability;

-- AMERICAN RESTAURANT AVAILABILITY TABLE
USE availability_db;
CREATE TABLE american_availability
(
id INTEGER AUTO_INCREMENT,
topsize VARCHAR (15),
t530 INTEGER,
t600 INTEGER,
t630 INTEGER,
t700 INTEGER,
t730 INTEGER,
t800 INTEGER,
PRIMARY KEY(id)
);
INSERT INTO american_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("twoTops", 10, 6, 3, 2, 1, 6);
INSERT INTO american_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("fourTops", 8, 3, 4, 2, 3, 3);
INSERT INTO american_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("sixTops", 6, 4, 2, 0, 2, 3);
INSERT INTO american_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("eightTops", 4, 3, 1, 0, 0, 1);
SELECT * FROM american_availability;


USE availability_db;
CREATE TABLE brewery_availability
(
id INTEGER AUTO_INCREMENT,
topsize VARCHAR (15),
t530 INTEGER,
t600 INTEGER,
t630 INTEGER,
t700 INTEGER,
t730 INTEGER,
t800 INTEGER,
PRIMARY KEY(id)
);
INSERT INTO brewery_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("twoTops", 10, 5, 1, 0, 1, 6);
INSERT INTO brewery_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("fourTops", 8, 3, 1, 0, 3, 3);
INSERT INTO brewery_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("sixTops", 4, 3, 2, 0, 2, 3);
INSERT INTO brewery_availability
(topsize, t530, t600, t630, t700, t730, t800)
VALUES
("eightTops", 2, 1, 0, 0, 0, 1);
SELECT * FROM brewery_availability;
