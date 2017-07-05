-- Select all the products that have orders and their orders
-- Select all the products and their orders
-- [Note] the price in the line_items table is price per unit and not total price.

select p.id, p.name, l.id, o.id  
from products p inner join line_items legal
on p.id = l.product_id
inner join orders o
on l.order_id = o.id
