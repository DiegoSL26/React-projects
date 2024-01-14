create database sneakers;
CREATE TABLE sneaker (
	id INT NOT NULL auto_increment,
    name varchar(255) NOT NULL,
    brand varchar(255) NOT NULL,
    gender varchar(255) NOT NULL,
    price int,
    colorway varchar(255) NOT NULL,
    originalImage varchar(255) NOT NULL,
    thumbnail varchar(255) NOT NULL,
    smallImage varchar(255) NOT NULL,
    PRIMARY KEY (id)
)