# Introduction to Databases and SQL
We need databases in order to persist data on the disk instead of just having data live in memory. We can store data to files but it will be cumbersome to search the database and enforce standard rules.

## Types of Databases
Databases are generally categorized in two primary categories:
- Relational (or SQL) Databases
- NoSQL Databases


## Relational Databases
Relational database are the databases that are based on `relations` or `tables`. Data with relational databases must be stored in pre-defined tables that has pre-defined columns. You interact with relational databases using SQL. Here are few popular relational databases:
- SQLite
- MySQL / MariaDB
- Postgres
- MSSQL
- Oracle

## SQL
SQL Stands for Structured Query Language which is the language that is used to interact with relational databases. It's pronouced in two differnet ways:
- As Acronym: Es Que El
- As a word: Sequel

## SQLite
SQLite is probably the simplest relational databases. It ships with most operating systems. You can try running the following command from your console:
```shell
sqlite3
```
You can also use this tool: [http://sqlitebrowser.org/](http://sqlitebrowser.org/). 

SQLite simply puts the entire database in a single file that you can use / point to. It's not a database to be used on production.

## Creating Tables
To create a table you can use `CREATE TABLE` command as in:
```sql
CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,        
  first_name VARCHAR(50), 
  last_name VARCHAR(50), 
  email VARCHAR(255), 
  phone_number VARCHAR(25),
  bio TEXT);
```
The code above creates a table called students with the following fields: `id`, `first_name`, `last_name`, `email`, `phone_number` and `bio`.

### Altering Tables
You can alter tables by adding / removing columns by running queries like:
```sql
ALTER TABLE students ADD COLUMN age integer;
```
or
```sql
ALTER TABLE students ADD COLUMN age integer;
```

### Data Types
When creating tables you must provide the data type for each column, here are the most popular data types:
- INTEGER: signed four-byte integer 
- VARCHAR: Variable Character String field. Maximum length is 255 characters.
- TEXT: variable-length character string
- FLOAT: Decimal point number 
- BOOLEAN: True or false
- DATETIME: Timestamp that stores the date and time

Note that the details above are specific to Postgresql which is the database we will use most often in this course. There may be slight differences with other databaes. Also, the naming of the types may differ a bit as well.

## Primary Keys
It's a good idea to have primary key in your tables. Primary keys are used to identify specific rows. Primary keys can be any type of database, the main things is that they must be unique. The most common practice is to name the primary key `id` and make it of type `integer`.

## AUTOINCREMENT
As primary keys must be unique, you will need to increment the primary key for new rows from the last inserted row. You can make use of the `AUTOINCREMENT` feature of databaes to automatically keep track of the last used primary key and increment it by `1` for newly inserted rows.

## CRUD
The primary operations we do on rows of database are abbreiviated with `CRUD` whichs is an acronym for: `Create`, `Read`, `Update` and `Delete`. Note that to do any of these operations the table must be created with the right columns first.

### Create using INSERT
To add a row to a table in the database you can use `INSERT` as in:
```sql
INSERT INTO students(first_name, last_name, email, phone_number) VALUES ('Tam', 'Kbeili', 'tam@codecore.ca', '778.994.8776');
```
This will create a row in the database unless you have constraints that prevents that. In that case you will get an exception.

### Read using SELECT
You can fetch rows from relational databases with SQL using `SELECT` statements as in:
```sql
SELECT * FROM students;
```
This selects all the rows and columns from the users table.

#### Selecting Specific Columns
You can select specific columns by listing them instead of the `*` as in:
```sql
SELECT first_name, last_name FROM students;
```
This will only select the `first_name` and `last_name` fields of the students table.

#### WHERE
In most circumstances you will need to filter the rows you fetch from the database to get a subset of them. You do that by adding `WHERE` clause as in:
```sql
SELECT * FROM students WHERE id=1;
```
This selects one row from the students with id `1` assuming `id` is the primary key so we only have one student record with that id.

#### Operators
In your `WHERE` clause you can use the following operators:
- = equals!
- = not equals
- > greater than
- < less than
- >= greater than or equal to
- <= less than or equal to

For example you can do:
```sql
SELECT * FROM students WHERE age > 20;
```

#### AND / OR
You can combine multiple conditions in the `WHERE` clause using `AND` and `OR`. For instance:
```sql
SELECT * FROM students WHERE age > 40 AND age < 60;
```
This will select students whose ages are more than 40 and less than 60.

#### three-valued logic (3VL)
In SQL the absence of value is represented by `NULL` so if you have a `Boolean` field your options will be `TRUE`, `FALSE` and `NULL`. This is why in SQL we say it's three-valued logic. Note that if you want to check if a given column is `NULL` or not, you will have to use special syntax: `IS NULL` and `IS NOT NULL` as in:
```sql
SELECT * FROM students WHERE age IS NULL;
```
This will select all students who `age` is `NULL`. Note that the following will give you an unexpected results:
```sql
SELECT * FROM students WHERE age = NULL;
```
This will give you an empty set even when you have students whose `age` is `NULL`

#### LIKE
Like can be used for pattern matching within SQL queries so you can construct queries such as:
```sql
SELECT * FROM students WHERE first_name LIKE 'Jo%';
```
Which finds all the students whose first names start with the pattern `Jo`. You can also do:
```sql
SELECT * FROM students WHERE first_name LIKE '%an';
```
Which finds all the students whose first names start with the pattern `an`. You can also do:
```sql
SELECT * FROM students WHERE first_name LIKE '%aa%';
```
Which finds all the students whose first names contain the pattern `nn`. 

Note that in Postgres you can use `ILIKE` instead of `LIKE` for case insensitive search.

#### BETWEEN
If you want to find a record whose column value is between one value and another, you can use `BETWEEN` clause which is more convenient than using two `>` and `<` operators. Here is an example:
```sql
SELECT * FROM students WHERE age BETWEEN 20 and 40;
```

#### ORDER BY
You can sort the SQL result by a specific field using `ORDER BY` as in:
```sql
SELECT * FROM students ORDER BY first_name ASC;
```
This will return all students sorted by their first names in an ascending order. You can sort the result by descending order using:
```sql
SELECT * FROM students ORDER BY first_name DESC;
```
You can sort the result by multiple fields by separating them with commas, for instance:
```sql
SELECT * FROM students ORDER BY first_name, last_name ASC;
```
This will return all students sorted with their first name but if there are students with the same `first_name` they will be sorted with their `last_name` value.

#### LIMIT
You can limit the number of results you get back using `LIMIT` as in:
```sql
SELECT * FROM students ORDER BY first_name ASC LIMIT 10;
```
This fetches a maximum of 10 students ordered by their first names;

#### OFFSET
You can use `OFFSET` to skip certain number of results. For example:
```sql
SELECT * FROM students ORDER BY first_name ASC OFFSET 10;
```
This will skip the first 10 results and start displaying students starting from the 11th row. It's generally used in combination with `LIMIT` to implement pagination with the database.

## Aggregate Functions
You can use aggregate functions to do some calculation at the database level which is generally much more efficient than doing calculating with the programming language.

### COUNT
`COUNT` functions gives the number of returns records. For example:
```sql
SELECT COUNT(*) FROM students;
```
This returns the number of students in the database. You can change the label of the return count using `AS`:
```sql
SELECT count(*) AS student_count FROM students;
```

### SUM
`SUM` adds up the result for a given query. For instance:
```sql
SELECT SUM(age) FROM students;
```
This returns the sum of all the ages of all students.

### AVG
`AVG` returns the average value of a given column. For instance:
```sql
SELECT AVG(age) FROM students;
```
This returns the average age of all students.

### MAX
`MAX` returns the maximum value of a given colum. For instance:
```sql
SELECT MAX(age) FROM students;
```
This returns the maximum age of all students.

### GROUP BY
You can use `GROUP BY` if you want to aggregate your date into groups with similar condition. For example:
```sql
SELECT COUNT(first_name) AS first_name_count, first_name FROM students GROUP BY first_name;
```
This will return all first names (only once) and it will also return the number of occurances of each name. So we grouped the results in this case by the first name.