SELECT * FROM students WHERE id > 100;

SELECT * FROM students WHERE age > 40;

SELECT * FROM students WHERE registration_date >= current_date - 20;
SELECT * FROM students WHERE registration_date >= '2017-06-02';
SELECT * FROM students WHERE registration_date >= (now() - interval '20 days');
SELECT * FROM students WHERE registration_date BETWEEN '2017-06-02' AND now();

SELECT * FROM students
  WHERE id > 100 AND id < 200;

SELECT * FROM students
  WHERE age < 20 OR age > 40;

SELECT * FROM students
  WHERE age IS NULL;

SELECT * FROM students
  WHERE age IS NOT NULL;

SELECT * FROM students
  WHERE age IS NULL OR age < 20;

-- When using a query with LIKE, specify parts of the word
-- that are not considered the match with %
SELECT * FROM students
  WHERE first_name LIKE 'Jo%'; -- Matches all students with first_name beginning
  -- with 'Jo'

-- Find all students whose last name contain the letters 'jo' (case insensitive)
SELECT * FROM students
  WHERE last_name ILIKE '%jo%';

SELECT * FROM students
  WHERE first_name ILIKE '%on';

SELECT * FROM students
  WHERE age BETWEEN 25 AND 35;
-- BETWEEN is inclusive. It is similar to
SELECT * FROM students
  WHERE age >= 25 AND age <= 35;

SELECT * FROM students
  WHERE registration_date
  BETWEEN current_date - 25 AND current_date - 20;


SELECT * FROM students
  --  WHERE first_name ILIKE 'jo%'
  ORDER BY last_name ASC, age DESC;

SELECT * FROM students
  WHERE age > 30
  ORDER BY first_name, last_name;

SELECT * FROM students LIMIT 10;

SELECT * FROM students
	WHERE first_name ILIKE 'ke%'
  LIMIT 10;

SELECT * FROM students OFFSET 20 LIMIT 10;

SELECT * FROM students
  WHERE age < 25
  OFFSET 20
  LIMIT 20;

-- Use AS in a select alias columns returned from query to different names
SELECT count(*) AS student_count FROM students
  WHERE age < 25;

SELECT count(*) AS student_count, sum(age) AS total_years FROM students;

SELECT count(*) AS student_count, sum(id) AS total_of_ids FROM students;

SELECT
  count(*) AS student_count,
  sum(age) AS total_age,
  avg(age) AS average_age
FROM students;

SELECT
  avg(age) AS average_age
FROM students
WHERE registration_date > '2017-01-01';

SELECT
 MAX(age) AS max_age
FROM students;


SELECT
 MAX(age) AS max_age
FROM students
WHERE first_name ILIKE 'j%';

SELECT first_name, count(first_name) AS first_name_occurences FROM students
GROUP BY first_name ORDER BY first_name_occurences DESC;

-- Be careful when using UPDATE or DELETE without a WHERE filter.
-- It will operate on all values in the table.
UPDATE students
  SET (first_name, last_name, age) = ('Ron', 'Burgundy', 50)
  WHERE id = 2;

DELETE FROM students
  WHERE id = 20;

-- This is a comment



--Jason's sql

-- Create a record
INSERT INTO products(name, description, price, sale_price, remaining_quantity)
VALUES ('Hot Coffee', 'Black no Sugar', 5, 8, 77);

-- Select the last record
SELECT *
FROM products
ORDER BY ID DESC
LIMIT 1;

-- Select record with id
SELECT *
FROM products
WHERE id=246;

-- Update a specific record
UPDATE products
SET remaining_quantity = 39
WHERE id=246;

-- Delect a specific record
DELETE
FROM products
WHERE id=264;

-- Delect multiple records
DELETE
FROM products
WHERE id > 245;

-- Select the count using an aggregate function
SELECT COUNT(*) AS number_of_products
FROM products;


/*
Amir's Sql

*/



--If you are using psql as client, simply add the following line to
~/.psqlrc: \set AUTOCOMMIT off

/*
Instead of

update mytable set start_time='13:06:00' where id=123;
I typed

update mytable set start_time='13:06:00';
So, all records are now having the same start_time value..

Is there a way to undo this change?There are some 500+ records in the table,and I do not know what the start_time value for each record was

Is it lost forever?


*/


update students set (first_name, last_name) = ('John','Snow') where id = 22;
select * from students;

insert into students (first_name, last_name, age, email, registration_date, phone_number) values ('Ainkaran', 'Pat', '99', 'amircmpt@gmail.com', '2017-06-07' ,'6045189612');
select * from students order by age desc;

select * from students order by age desc;

update students set (age) = (50) where id = (select id from students order by id desc limit 1);
select * from students where age = 50;
