-- Check all users in a specific group
SELECT u.name 
FROM Users u 
JOIN Members m ON u.userid = m.userid 
WHERE m.groupid = 'G001';

-- Check all transactions in a group
SELECT t.transaction_type, t.amount, 
       u1.name as payer, u2.name as payee 
FROM TransactionsInGroup t
JOIN Users u1 ON t.payer_id = u1.userid
JOIN Users u2 ON t.payee_id = u2.userid
WHERE t.group_id = 'G001';

-- Check user balances in a group
SELECT get_user_balance('U001', 'G001') as alice_house_balance;