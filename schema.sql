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
VALUES ("BURGERS 'N' BASES");
INSERT INTO restaurants (restaurant_name) 
VALUES ("CHINA HAPPY FOOD");
INSERT INTO restaurants (restaurant_name) 
VALUES ("BREW-U");

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
-- BURGERS 'N' BASES --
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("twoTop", 12, 12, 12, 12, 12, 12, 3);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("fourTop", 10, 10, 10, 10, 10, 10, 3);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("sixTop", 6, 6, 6, 6, 6, 6, 3);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("eightTop", 4, 4, 4, 4, 4, 4, 3);
-- CHINA HAPPY FOOD --
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("twoTop", 8, 8, 8, 8, 8, 8, 4);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("fourTop", 8, 8, 8, 8, 8, 8, 4);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("sixTop", 4, 4, 4, 4, 4, 4, 4);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("eightTop", 2, 2, 2, 2, 2, 2, 4);
-- BREW-U --
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("twoTop", 14, 14, 14, 14, 14, 14, 5);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("fourTop", 10, 10, 10, 10, 10, 10, 5);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("sixTop", 6, 6, 6, 6, 6, 6, 5);
INSERT INTO table_availability (topSize, t530, t600, t630, t700, t730, t800, restaurant_id) 
VALUES ("eightTop", 2, 2, 2, 2, 2, 2, 5);

-- DISPLAY RESTAURANT TABLE --
SELECT * FROM restaurants;
-- DISPLAY INVENTORY TABLE --
SELECT * FROM table_availability;