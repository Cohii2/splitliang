import {Context, createContext, useContext} from "react";

export type User = {
    userId: string; // Unique identifier
    username: string; // Username chosen by User
};

export type Money = {
    amount: number;
    // SDG & top 2 traded currencies
    currency: "SGD" | "USD" | "EUR";
};

export type Expense = {
    id: string; // Unique identifier
    description: string; // Expense title (eg. "Lunch at I'm Kim")

    createdAt: Date; // Timestamp of expense creation

    totalMoney: Money; // Total expense amount
    paidBy: User; // User who paid the expense

    participantList: User[]; // Users sharing the expense
    splits: { [userId: string]: Money }; // How much each user owes
};

export type Group = {
    id: string; // Unique identifier
    name: string; // Group name (eg. "Blu Tack Free Group")

    userList: User[]; // List of users in group
    expenseList: Expense[]; // Expenses recorded in the group

    // Balances of each user in group
    // Positive: User with userId is owed amount
    // Negative: User with userId owes amount to others
    balances: { [userId: string]: Money[] }; // How much each user owes in general
};

export type DataContextType = {
    // Data
    groupList: Group[];
    // UI
    isLoading: boolean;
};

export const DataContext: Context<DataContextType | null> = createContext(null);

export const useData = () => {
    const context: DataContextType|null = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within an AuthProvider");
    }
    return context;
};
