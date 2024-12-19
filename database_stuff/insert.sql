-- Insert Users
INSERT INTO Users (userid, name, password) VALUES
('U001', 'Alice Smith', 'hashed_pass123'),
('U002', 'Bob Johnson', 'hashed_pass456'),
('U003', 'Charlie Brown', 'hashed_pass789'),
('U004', 'David Wilson', 'hashed_pass101'),
('U005', 'Eve Anderson', 'hashed_pass102');

-- Insert Groups
INSERT INTO Groups (groupid, name) VALUES
('G001', 'House Expenses'),
('G002', 'Road Trip 2024'),
('G003', 'Friday Dinner');

-- Insert Members (showing different group compositions)
INSERT INTO Members (userid, groupid) VALUES
-- House Expenses group
('U001', 'G001'),
('U002', 'G001'),
('U003', 'G001'),
-- Road Trip group
('U002', 'G002'),
('U003', 'G002'),
('U004', 'G002'),
('U005', 'G002'),
-- Friday Dinner group
('U001', 'G003'),
('U003', 'G003'),
('U005', 'G003');

-- Insert Transactions
INSERT INTO TransactionsInGroup (transactionid, transaction_type, currency, amount, payer_id, payee_id, group_id) VALUES
-- House Expenses transactions
('T001', 'PAYMENT', 'USD', 300.00, 'U001', 'U002', 'G001'),    -- Rent payment
('T002', 'PAYMENT', 'USD', 75.50, 'U002', 'U003', 'G001'),     -- Utilities
('T003', 'PAYMENT', 'USD', 120.00, 'U003', 'U001', 'G001'),    -- Groceries

-- Road Trip transactions
('T004', 'PAYMENT', 'USD', 200.00, 'U002', 'U004', 'G002'),    -- Gas
('T005', 'PAYMENT', 'USD', 160.00, 'U003', 'U005', 'G002'),    -- Hotel
('T006', 'PAYMENT', 'USD', 90.00, 'U004', 'U002', 'G002'),     -- Food

-- Friday Dinner transactions
('T007', 'PAYMENT', 'USD', 45.00, 'U001', 'U003', 'G003'),     -- Main course
('T008', 'PAYMENT', 'USD', 25.00, 'U003', 'U005', 'G003'),     -- Desserts
('T009', 'PAYMENT', 'USD', 30.00, 'U005', 'U001', 'G003'),     -- Drinks

-- Some settlements
('T010', 'SETTLEMENT', 'USD', 150.00, 'U002', 'U001', 'G001'), -- Settling house expenses
('T011', 'SETTLEMENT', 'USD', 70.00, 'U004', 'U003', 'G002'),  -- Settling trip expenses
('T012', 'SETTLEMENT', 'USD', 20.00, 'U005', 'U003', 'G003');  -- Settling dinner expenses