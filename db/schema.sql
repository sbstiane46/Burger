DROP DATABASE IF EXISTS burger_db;

USE burgers_db;

CREATE TABLE burgers(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Hawaiian Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Veggie Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Mexican Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Monster Burger', FALSE);
