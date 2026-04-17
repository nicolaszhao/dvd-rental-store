-- 查询 film 表中所有电影的标题、上映年份和评分
SELECT
  title,
  release_year,
  rating
FROM
  film;  

-- 从 customer 表中筛选出姓氏以 S 开头的客户姓名和邮箱
SELECT
  first_name || ' ' || last_name AS full_name,
  email
FROM
  customer
WHERE
  last_name LIKE 'S%';

-- 统计 inventory 表中可用库存（inventory_id 非空）的总数量
SELECT
  COUNT(inventory_id) AS total_inventory
FROM
  inventory;

-- 对 payment 表按金额（amount）降序排列，取前 10 条支付记录
SELECT
  *
FROM
  payment
ORDER BY
  amount DESC
LIMIT 10;

-- 查询 actor 表中名字为 Nick 且姓氏为 Wahlberg 的演员信息
SELECT
  *
FROM
  actor
WHERE
  first_name = 'Nick' AND last_name = 'Wahlberg';

-- 统计 film 表中不同评分的电影数量，按数量降序排列
SELECT
  rating,
  COUNT(rating) AS rating_count
FROM
  film
GROUP BY
  rating
ORDER BY
  rating_count DESC;

-- 计算 payment 表中每个客户的总支付金额，筛选出总金额大于 100 的客户 ID 和总金额
SELECT
  customer_id,
  SUM(amount) AS total_revenue
FROM
  payment
GROUP BY
  customer_id
HAVING
  SUM(amount) > 100
ORDER BY
  total_revenue DESC;

-- 查询 rental 表中 2005 年 8 月的租赁记录
SELECT
  *
FROM
  rental
WHERE
  EXTRACT(YEAR FROM rental_date) = 2005 AND EXTRACT(MONTH FROM rental_date) = 8;

-- 找出 film 表中时长最长的 5 部电影的标题和时长
SELECT
  title,
  length
FROM
  film
ORDER BY
  length DESC
LIMIT 5;

-- 统计 customer 表中不同地区的客户数量
SELECT
  a.district,
  COUNT(customer_id) AS customer_count
FROM
  customer c
JOIN
  address a USING(address_id)
GROUP BY
  a.district
ORDER BY
  customer_count DESC;

-- 关联 customer 和 address 表，查询客户姓名、电话和所在街道
SELECT
  c.first_name,
  c.last_name,
  a.phone,
  a.address
FROM
  customer c
INNER JOIN
  address a USING(address_id)
LIMIT 5;

-- 用 LEFT JOIN 关联 film、film_category、category 表，查询所有电影的标题及其所属分类名称
SELECT
  film.title,
  category.name AS category_name
FROM
  film
LEFT JOIN
  film_category fc USING(film_id)
LEFT JOIN
  category USING(category_id)

-- 关联 rental、inventory 和 film 表，查询 2005 年 7 月租赁过的电影标题和租赁日期
SELECT
  film.title,
  rental.rental_date
FROM
  rental
INNER JOIN
  inventory USING(inventory_id)
INNER JOIN
  film USING(film_id)
WHERE
  extract(YEAR FROM rental.rental_date) = 2005
  AND extract(MONTH FROM rental.rental_date) = 7
ORDER BY
  rental.rental_date DESC
LIMIT 10;

-- 关联 actor 和 film_actor 表，查询演员 Penelope Guzman 参演的所有电影标题
SELECT
  film.title
FROM
  actor
INNER JOIN
  film_actor USING(actor_id)
INNER JOIN
  film USING(film_id)
WHERE
  actor.first_name = 'Penelope';

-- 关联 payment 和 customer 表，查询每个客户的姓名和对应的单次最高支付金额
SELECT
  customer.first_name || ' ' || customer.last_name AS customer_name,
  MAX(payment.amount) AS highest_payment
FROM
  customer
INNER JOIN
  payment USING(customer_id)
GROUP BY
  customer.customer_id

-- 用子查询找出支付金额最高的客户 ID，再查询该客户的姓名和邮箱

SELECT
  first_name,
  last_name,
  email
FROM
  customer
WHERE customer_id = (
  SELECT
    DISTINCT customer_id
  FROM
    payment a
  INNER JOIN
    (
      SELECT 
        customer_id, 
        SUM(amount) 
      FROM 
        payment 
      GROUP BY 
        customer_id 
      ORDER BY 
        SUM(amount) DESC LIMIT 1
    ) 
      b USING (customer_id)
  );

SELECT first_name, last_name, email 
FROM customer 
WHERE customer_id = (
    SELECT customer_id FROM payment ORDER BY amount DESC LIMIT 1
);

SELECT
  customer.first_name || ' ' || customer.last_name AS customer_name,
  email,
  SUM(payment.amount) AS total_payment
FROM
  customer
INNER JOIN
  payment USING(customer_id)
GROUP BY
  customer.customer_id
ORDER BY
  total_payment ASC
LIMIT 3;


SELECT
  *
FROM
  city
INNER JOIN
  country USING(country_id)
WHERE
  country.country = 'United States';


SELECT rating, AVG(length)
    FROM film
    GROUP BY rating;


SELECT film_id, title, length, rating
FROM film f
WHERE length > (
    SELECT AVG(length)
    FROM film
    WHERE rating = f.rating
);


SELECT
  f.film_id,
  f.title,
  i.inventory_id
FROM
  film f
  LEFT JOIN inventory i USING (film_id)
ORDER BY
  i.inventory_id DESC;


SELECT
  f1.title,
  f2.title,
  f1.length
FROM
  film f1
  INNER JOIN film f2 ON f1.film_id > f2.film_id
  AND f1.length = f2.length
ORDER BY f1.length DESC

-- 查询从未被租赁过的电影标题
SELECT title FROM film
WHERE NOT EXISTS (
  SELECT
    1
  FROM
    rental
  INNER JOIN
    inventory USING(inventory_id)
  WHERE
    inventory.film_id = film.film_id
) LIMIT 3;

SELECT title 
FROM film f
WHERE f.film_id NOT IN (
    SELECT DISTINCT i.film_id FROM inventory i JOIN rental r ON i.inventory_id = r.inventory_id
) LIMIT 3;

-- 找出评分 PG-13 且时长超过所有 PG 级电影平均时长的电影标题
SELECT
  title,
  rating,
  length
FROM
  film
WHERE
  rating = 'PG-13' AND length > (
    SELECT
      AVG(length)
    FROM
      film
    WHERE
      rating = 'PG'
  )
ORDER BY
  length DESC
LIMIT 5;

-- 用子查询统计每个分类下的电影数量，再筛选出电影数量超过 60 的分类名称

SELECT
  name
FROM
  category
WHERE
  category_id IN (
    SELECT
      category_id
    FROM
      film_category
    GROUP BY
      category_id
    HAVING
      COUNT(film_id) > 60
  )
ORDER BY
  name
LIMIT 3;




SELECT name
FROM category
WHERE category_id IN (
  SELECT category_id
  FROM film_category
  GROUP BY category_id
  HAVING COUNT(film_id) > 60
) ORDER BY name ASC LIMIT 5;

SELECT
  category.name
FROM
  category
INNER JOIN
  film_category USING(category_id)
GROUP BY
  category.name
HAVING
  COUNT(film_id) > 60
ORDER BY
  category.name ASC
LIMIT 5;

-- 查询 2007 年 2 月支付金额大于当月平均支付金额的所有支付记录

SELECT 
  *
FROM
  payment a
WHERE
  EXTRACT(YEAR FROM a.payment_date) = 2007
  AND EXTRACT(MONTH FROM a.payment_date) = 2
  AND amount > (
SELECT
  AVG(amount)
FROM
  payment b
WHERE
 EXTRACT(YEAR FROM b.payment_date) = 2007
  AND EXTRACT(MONTH FROM b.payment_date) = 2
  )


-- 按电影分类分组，计算每个分类下电影的平均时长，按平均时长升序排列

SELECT
  category.name AS category_name,
  AVG(film.length) AS avg_length
FROM
  film
INNER JOIN
  film_category USING(film_id)
INNER JOIN
  category USING(category_id)
GROUP BY
  category.name
ORDER BY
  avg_length;

-- 使用 CASE WHEN 对 film 表的时长分段，统计各分段的电影数量

SELECT
  CASE
    WHEN length < 60 THEN 'Short'
    WHEN length BETWEEN 60 AND 120 THEN 'Medium'
    ELSE 'Long'
  END AS length_category,
  count(film_id) AS length_category_count
FROM
  film
GROUP BY
  length_category;


-- 用 DISTINCT 查询所有客户的所在地区，去重后按字母顺序排列

SELECT
  DISTINCT a.district
FROM
  address a
INNER JOIN
  customer c USING(address_id)
ORDER BY
  a.district;

-- 关联 rental 和 customer 表，找出租赁次数最多的前 5 名客户姓名和租赁次数

SELECT
  c.first_name || ' ' || c.last_name AS customer_name,
  COUNT(r.rental_id) AS rental_count
FROM
  customer c
INNER JOIN
  rental r USING(customer_id)
GROUP BY
  c.customer_id
ORDER BY
  rental_count DESC
LIMIT 5;

SELECT c.first_name, c.last_name, COUNT(r.rental_id) AS rental_count
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY rental_count DESC
LIMIT 5;

SELECT
  r.rental_id,
  c.customer_id,
  c.first_name || ' ' || c.last_name AS customer_name
FROM
  rental r
INNER JOIN
  customer c USING(customer_id)
ORDER BY
  c.customer_id

-- 使用 DATE_TRUNC 函数按月统计 payment 表的总支付金额，查看 2005 年每月的支付趋势

SELECT
  DATE_TRUNC('month', payment_date) AS payment_month,
  SUM(amount) AS total_amount
FROM
  payment
WHERE
  EXTRACT(YEAR FROM payment_date) = 2007
GROUP BY
  payment_month


