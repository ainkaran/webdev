# Introduction to Databases and SQL Part 2
We will cover some more topics about databases in this gist. Please note that some of the syntax below may only apply to Postgres databases; however, the concepts are fairly universal to all relational databases.

## Associating Records
There are three primary way to associate records together in relations databaes:
- One to many
- One to one
- Many to many

### One to Many
We can associate records in a one to many fashion with other records by including a new column that references the original row's primary key. The row can be in the same table on a different table. We call that new column `foreign key`. For example if we have table `students` that stores students' information and we have a second table `projects` that stores information about projects created by students, we can have a column `student_id` in the `projects` table to store the id, or reference, the student who created the project. So if a project is created by a student with an `id` value of `10` we can store the `student_id` in the project row as `10` to reference the student who created the project. 

### One to One
Implementing one to one association is the same as implementing one to many. The only differnce is that there should be only one record reference a specific record which can be enforced with code or a constraint.

### Many to Many
The most common way to implement many to many association is to have a third table, called the join table, to associate the records together. So if you have a courses table that stores information about courses, by nature the courses to students relationship is many to many because a student can be enroled in many course and each course can have many students enroled in it.

We can have a third table, and can call it `enrolments` for instance that include references for both `courses` and `students`. The `enrolments` table will have `course_id` and `student_id`. The `enrolments` table can contain other columns such as `score` as well.

## Joins
In many scenarios, especially when doing associations, we would like to execute queries that fetch data from multiple tables. 
### INNER JOIN
If you want to find the data that is associated between two tables you can do use `INNER JOIN`. For example if you want to find all students and their projects you can write:
```sql
SELECT * FROM students INNER JOIN projects ON projects.student_id = students.id;
```
This will fetch all the students who have at least one project and it will fetch all the projects associated with those students. If the student has multiple projects, you will see multiple rows with the same student id in them.

### LEFT JOIN
If, for instance, you want to select all students whether they have projects associted with them or not then you can use `LEFT JOIN` instead of using `INNER JOIN`. This fetches all studenst and the projects associated with them:
```sql
SELECT * FROM students LEFT JOIN projects ON projects.student_id = students.id;
```
## Constraints
You can add contraints to add validation at the database level to prevent adding, updating or removing data from your database. 

### NOT NULL
When creating a table you can add `NOT NULL` after defining the type of the column, this way the database will prevent you from creating a record without entering a value for the field. for example:
```sql
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL, 
  ...
```
This way the database won't allow to create a student without a `first_name`.

### UNIQUE
You can use the `UNIQUE` contraint to ensure that the value entered in the column is unique.

### PRIMARY KEY
Primary key constraint is simply a combination of a unique constraint and a not-null constraint. It's advisable that every table contains a primary key. In Rails the convention is to call it `id` and have it as an `INTEGER` data type.

### Foreign Key
Adding a foreign key contraint ensures that when you create a record which references another record that the record being referenced exists. It will also prevents you from deleting a record that has other records associated with it. Here is how you add a foreign key contraint to an existing table:
```sql
ALTER TABLE projects 
ADD CONSTRAINT projects_students_fk 
FOREIGN KEY (student_id) 
REFERENCES students;
```
You also write it as:
```sql
ALTER TABLE projects 
ADD CONSTRAINT projects_students_fk 
FOREIGN KEY (student_id) 
REFERENCES students
ON DELETE CASCADE;
```
This way if you delete a student record and there are project records associted with it, they will be deleted as well.

## Database Normalization
Database Normalization is the process of reorganizing the columns in your database to avoid redudndency. To noramlize your database you can reorganize your database so that the value that can be calculated don't have to be stored.

In some scenarios we may want to have redundant data to speed up the application by avoiding queries that may time time to execute.

## Database Transactions
If you have a group of queries that you want to either have them all execute successfully or none of them at all, you can use transactions. You can start your queries with the keyword `BEGIN` and then if you want the transactions to take effect you can run `COMMIT`, otherwise you can run `ROLLBACK`.

## Database Indexing
To speed up fetching data from databases, you can use indexes. It asks the database to store an extra data structure that helps you fetch data quickly. Keep in mind that having an index means extra storage and extra work when inserting data to update stroage.

### Unique vs. Non-Unique
You can create the index as unique or non-unique depending on what you're expecting to store in that column. Note that unique index will add a unique contraint that prevents you from inserting another record. You can create an index by:
```sql
CREATE UNIQUE INDEX email ON students (email);
```

### Composite Indexes
If you're doing lots of queries that involve seaching with multiple fields at the same time then it makes more sense to have a composite index which is an index on multiple fields.
