-- Select burgers_db
USE burgers_db;

-- insert 3 burgers
INSERT INTO burgers (burger_name, devoured, date) VALUES 
('Whopper', false, CURRENT_TIMESTAMP),
('Big Mac', false, CURRENT_TIMESTAMP),
('Baconator', false, CURRENT_TIMESTAMP);