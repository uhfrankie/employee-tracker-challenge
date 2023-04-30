-- SQL query inserts data for multiple departments into the "department" table, including the department names. 
INSERT INTO department (name) VALUES
    ("attendants", 1),
    ("lead", 2),
    ("management", 3);
-- SQL query inserts data for multiple roles into the "role" table, including the job title and corresponding salary.
INSERT INTO role (title, salary, departmentId) VALUES 
    ("wardrobe attendant", 35000, 1),
    ("supervisor", 60000, 3),
    ("shift lead", 40000, 2),
    ("manager", 80000, 3),
    ("stocker", 35000, 1);
-- SQL query inserts data for multiple employees into the "employee" table, including their first name, last name, and manager's ID.
INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES 
    ( "isobel","bulanhagui", 1, 1),
    ( "rose","direnzo", 2, 1),
    ( "kayla","james", 3, 3),
    ( "kip","trenz", 4, 2),
    ( "jose","morales", 5, 2),
    ( "shay","harleston", 6, 3),
    ( "sam","oken", 7, 1),    
    ( "frankie","sanchez", 8, 1);    	