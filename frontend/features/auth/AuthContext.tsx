import {Context, createContext, useContext} from "react";

export type AuthContextType = {
    user: { username: string; } | null;
    errorMessage: string | null;
    isLoading: boolean;
    login: (username: string, password: string) => Promise<void>;
    signup: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

export const AuthContext: Context<AuthContextType | null> = createContext(null);

export const useAuth = () => {
    const context: AuthContextType|null = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
