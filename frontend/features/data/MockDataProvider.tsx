import {Group, User, Money, Expense} from "@/features/data/DataContext";
import {DataContext} from "@/features/data/DataContext";

export const MockDataProvider = ({ children }) => {
    const groupList: Group[] = [
        {
            id: "group-1",
            name: "Blu Tack Free Group",
            userList: [
                { userId: "user-1", username: "alice" },
                { userId: "user-2", username: "bob" },
                { userId: "user-3", username: "charlie" },
            ],
            expenseList: [
                {
                    id: "expense-1",
                    description: "Lunch at I'm Kim",
                    createdAt: new Date("2024-06-01T12:30:00Z"),
                    totalMoney: { amount: 90, currency: "SGD" },
                    paidBy: { userId: "user-1", username: "alice" },
                    participantList: [
                        { userId: "user-1", username: "alice" },
                        { userId: "user-2", username: "bob" },
                        { userId: "user-3", username: "charlie" },
                    ],
                    splits: {
                        "user-1": { amount: 30, currency: "SGD" },
                        "user-2": { amount: 30, currency: "SGD" },
                        "user-3": { amount: 30, currency: "SGD" },
                    },
                },
                {
                    id: "expense-2",
                    description: "Dinner at Din Tai Fung",
                    createdAt: new Date("2024-06-02T18:45:00Z"),
                    totalMoney: { amount: 120, currency: "USD" },
                    paidBy: { userId: "user-2", username: "bob" },
                    participantList: [
                        { userId: "user-1", username: "alice" },
                        { userId: "user-2", username: "bob" },
                    ],
                    splits: {
                        "user-1": { amount: 60, currency: "USD" },
                        "user-2": { amount: 60, currency: "USD" },
                    },
                },
            ],
            balances: {
                "user-1": [ { amount: 60, currency: "SGD" }, { amount: -60, currency: "USD" } ],
                "user-2": [ { amount: -30, currency: "SGD" }, { amount: 60, currency: "USD" } ],
                "user-3": [ { amount: -30, currency: "SGD" } ],
            },
        },
    ] as Group[];

    const isLoading: boolean = false;

    return (
        <DataContext.Provider value={{ groupList, isLoading }}>
            {children}
        </DataContext.Provider>
    );
};
