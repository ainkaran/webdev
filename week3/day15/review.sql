/*
for Ubuntu:
To add this ppa just type in these commands in terminal:

  sudo add-apt-repository -y ppa:linuxgndu/sqlitebrowser

Then update the cache using:

  sudo apt-get update

Install the package using:

  sudo apt-get install sqlitebrowser


*/


-- Line Items for products

select * from products;

select * from line_items;

select * from orders;

select from products p inner join line_items li
on p.id = li.product_id
left join orders o
on li.order_id = o.id


Write the following SQL Queries:

Find the average line_item total price (meaning quantity * price) for each order that were completed
in January 2016 month.
Select product titles, product prices and the lowest price they were sold at during the last month.
[Note] the total price in the line_items table is price per unit and not total price.


select avg(l.quantity*l.price) from line_items l
left join orders o
on l.order_id = o.id
where o.completed_on between '2006-01-01' and '2016-01-31'

select name as title, price, min(price)
from product p, inner join line_items l
on p.id = l.product_id
inner join orders o
on l.order_id = o.id
where date_part('month', completed_on) = 12


select l.product_id, p.remaining_quantity + sum(l.quantity)
from products p left join line_items l
on p.id = l.product_id
group by p.id, l.product_id

select l.product_id, avg(l.quantity), sum(l.price*l.quantity)
from products p inner join line_items l
on p.id = l.product_id
inner join orders o
on l.order_id = o.id
group by l.product_id



select column_name, data_type, character_maximum_length
from INFORMATION_SCHEMA.COLUMNS where table_name = '<name of table>';




Using the SQL Lab tool: https://sql-lab.herokuapp.com/

Write the following SQL Queries:

Select all the products that have been purchased in the last month.

select *
from products inner join line_items l
on p.id = l.product_id
inner join orders o
on l.order_id = o.id
where o.completed_on = date_part(month, now() - interval '1' month));




Select the top 10 products in terms of last year's gross sales.
Select all the products that weren't purchased during the last month.
[Note] the price in the line_items table is price per unit and not total price.

-- create database

dropdb northwind
dropuser northwind_user

createdb northwind
psql northwind < northwind.sql

psql template1 -c "create user northwind_user;"
psql template1 -c "alter user northwind_user password 'thewindisblowing';"
psql template1 -c "grant all on DATABASE northwind to northwind_user;"
psql northwind -c "GRANT ALL on ALL tables IN SCHEMA public to northwind_user"
