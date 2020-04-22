-- create the database if there isn't one
DROP DATABASE IF EXISTS store;
CREATE DATABASE store;

USE store;

CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(25) NOT NULL,
  address VARCHAR(25) NOT NULL,
  city VARCHAR(25) NOT NULL,
  state VARCHAR(25) NOT NULL,
  zipcode VARCHAR(25) NOT NULL,
  phone VARCHAR(25) NOT NULL,
  credit_card BIGINT NOT NULL,
  expire_date INT NOT NULL,
  cvv VARCHAR(5) NOT NULL,
  billing_zip INT NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO orders (name, email, password, address, city, state, zipcode, phone, credit_card, expire_date, cvv, billing_zip)  VALUES ('Charlie Thao', 'charlie.thao@gmail.com', 'testing', '111 Taylor St', 'San Francisco', 'CA', 94102, 9119117777, 123456789012, '1023', 205, 94102);