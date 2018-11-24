-- DATABASE INITIALIZATION --
CREATE DATABASE go_seat_yourself;
USE go_seat_yourself;

-- CREATE TABLES --
-- RESTAURANTS --
CREATE TABLE restaurants (
	id INTEGER AUTO_INCREMENT NOT NULL,
    restaurant_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
    );
-- TABLE INVENTORY --
CREATE TABLE table_availability (
	id INTEGER AUTO_INCREMENT NOT NULL,
    topSize VARCHAR (15) NOT NULL,
    t530 INTEGER NOT NULL,
	t600 INTEGER NOT NULL,
	t630 INTEGER NOT NULL,
	t700 INTEGER NOT NULL,
	t730 INTEGER NOT NULL,
	t800 INTEGER NOT NULL,
    restaurant_id INTEGER NOT NULL,
	PRIMARY KEY(id),
    FOREIGN KEY(restaurant_id) REFERENCES restaurants(id)
    );

-- ADD RESTAURANTS TO TABLE --
INSERT INTO restaurants (restaurant_name) 
VALUES ("FIESTA MEXICANA");
INSERT INTO restaurants (restaurant_name) 
VALUES ("RISTORANTE ITALIANO");
INSERT INTO restaurants (restaurant_name) 
VALUES ("AMERICAN BISTRO");
INSERT INTO restaurants (restaurant_name) 
VALUES ("CHINA WOK");
INSERT INTO restaurants (restaurant_name) 
VALUES ("BREW FOR YOU");

-- ADD INVENTORY TO TABLE --
-- FIESTA MEXICANA --
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("twoTop", 10, 10, 10, 10, 10, 10, 1);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("fourTop", 8, 8, 8, 8, 8, 8, 1);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("sixTop", 4, 4, 4, 4, 4, 4, 1);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("eightTop", 2, 2, 2, 2, 2, 2, 1);
-- RISTORANTE ITALIANO --
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("twoTop", 8, 8, 8, 8, 8, 8, 2);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("fourTop", 8, 8, 8, 8, 8, 8, 2);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("sixTop", 5, 5, 5, 5, 5, 5, 2);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("eightTop", 4, 4, 4, 4, 4, 4, 2);
-- AMERICAN BISTRO --
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("twoTop", 12, 12, 12, 12, 12, 12, 3);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("fourTop", 10, 10, 10, 10, 10, 10, 3);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("sixTop", 6, 6, 6, 6, 6, 6, 3);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("eightTop", 4, 4, 4, 4, 4, 4, 3);
-- CHINA WOK --
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("twoTop", 8, 8, 8, 8, 8, 8, 4);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("fourTop", 8, 8, 8, 8, 8, 8, 4);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("sixTop", 4, 4, 4, 4, 4, 4, 4);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("eightTop", 2, 2, 2, 2, 2, 2, 4);
-- BREW FOR YOU --
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("twoTop", 14, 14, 14, 14, 14, 14, 5);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("fourTop", 10, 10, 10, 10, 10, 10, 5);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("sixTop", 6, 6, 6, 6, 6, 6, 5);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("eightTop", 2, 2, 2, 2, 2, 2, 5);


CREATE TABLE guestInfo (
	id INTEGER AUTO_INCREMENT NOT NULL,
    resRestaurant INTEGER NOT NULL,
    resMobile INTEGER NOT NULL,
    resAppetizer VARCHAR (30),
    resTime VARCHAR (15),
    resGuests INTEGER (5),
    PRIMARY KEY(id)
    );

-- DISPLAY RESTAURANT TABLE --
SELECT * FROM restaurants;
-- DISPLAY INVENTORY TABLE --
SELECT * FROM table_availability;
-- DISPLAY RESERVATION TABLE --
SELECT * FROM guestInfo;