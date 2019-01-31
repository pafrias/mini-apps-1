DROP DATABASE glamazon_prime;

CREATE DATABASE glamazon_prime;

USE glamazon_prime;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(128),
    cost DECIMAL(6,2),
    producer VARCHAR(64),
    PRIMARY KEY(id)
);

CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT,
    last_name VARCHAR(128) NOT NULL,
    first_name VARCHAR(128) NOT NULL,
    email VARCHAR(200),
    fake_pw VARCHAR(140),
    PRIMARY KEY(id)
);

CREATE TABLE addresses (
    id INT NOT NULL AUTO_INCREMENT,
    address_1 VARCHAR(128) NOT NULL,
    address_2 VARCHAR(128),
    city VARCHAR(128) NOT NULL,
    state CHAR(2) NOT NULL,
    zip CHAR(10) NOT NULL,
    customer INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (customer) REFERENCES customers(id)
);

CREATE TABLE pay_info (
    id INT NOT NULL AUTO_INCREMENT,
    cc_number INT(16),
    exp_date CHAR(5),
    zip INT(5),
    customer INT,
    PRIMARY KEY(id),
    FOREIGN KEY (customer) REFERENCES customers(id)
);

INSERT INTO products (name, cost, producer)
VALUES ("chips", 3.99, 'Lays');

INSERT INTO customers (last_name, first_name, email, fake_pw)
VALUES ('Frias', 'Pablo', 'pmaster@hotmills.com', 'I LOVE HELLO KITTY');

INSERT INTO addresses (address_1, city, state, zip, customer)
VALUES ('44 Birdy Lane', 'New Hampshire City', 'NH', '97354', 1);