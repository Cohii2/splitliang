-- Drop all tables
DROP TABLE IF EXISTS TransactionsInGroup;
DROP TABLE IF EXISTS Members;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Groups;


CREATE TABLE Users (
    userid INTEGER,
    username VARCHAR(200) NOT NULL CHECK (length(trim(username)) > 0),
    password VARCHAR(200) NOT NULL CHECK (length(trim(password)) > 0),
    PRIMARY KEY(userid)
);

CREATE TABLE Groups (
    groupid VARCHAR(100),
    name VARCHAR(200) NOT NULL CHECK (length(trim(name)) > 0),
    PRIMARY KEY(groupid)
);

CREATE TABLE Members (
    userid INTEGER,
    groupid VARCHAR(100),
    PRIMARY KEY(userid, groupid),
    FOREIGN KEY(userid) REFERENCES Users(userid),
    FOREIGN KEY(groupid) REFERENCES Groups(groupid)
);

CREATE TABLE TransactionsInGroup (
    transactionid VARCHAR(100),
    transaction_type VARCHAR(100) NOT NULL,
    currency CHAR(3) NOT NULL,
    amount DECIMAL(12, 2) NOT NULL,
    payer_id INTEGER,
    payee_id INTEGER,
    group_id VARCHAR(100),
    PRIMARY KEY(transactionid),
    CHECK (payer_id != payee_id),
    FOREIGN KEY(group_id) REFERENCES Groups(groupid)
        ON DELETE CASCADE
        ON UPDATE CASCADE
		DEFERRABLE INITIALLY DEFERRED,
    FOREIGN KEY(payer_id) REFERENCES Users(userid)
        ON DELETE CASCADE
        ON UPDATE CASCADE
		DEFERRABLE INITIALLY DEFERRED,
    FOREIGN KEY(payee_id) REFERENCES Users(userid)
        ON DELETE CASCADE
        ON UPDATE CASCADE
		DEFERRABLE INITIALLY DEFERRED
);




