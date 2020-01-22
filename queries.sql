-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT c.CategoryID, p.ProductName
  FROM Products AS p
JOIN Categories as c
  ON p.CategoryID = c.CategoryID;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT o.OrderID, s.ShipperName
  FROM Orders AS o
JOIN Shippers as s
  ON o.ShipperID = s.ShipperID
WHERE o.OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT p.ProductName, od.Quantity
  FROM OrderDetails AS od
JOIN Orders as o
  ON od.OrderID = o.OrderID
JOIN Products as p
  ON od.ProductID = p.ProductID
WHERE od.OrderID = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT o.OrderID, c.CustomerName, e.LastName
  FROM Orders AS o
JOIN Customers AS c
  ON o.CustomerID = c.CustomerID
JOIN Employees AS e
  ON o.EmployeeID = e.EmployeeID;

-- Stretch: Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
SELECT c.CategoryName, COUNT(p.ProductName) AS Count
  FROM Products as p
JOIN Categories as c
  ON p.CategoryID = c.CategoryID
GROUP BY c.CategoryName;
-- Stretch: Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
