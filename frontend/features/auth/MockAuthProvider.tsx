import {useState} from "react";
import {AuthContext} from "@/features/auth/AuthContext";

export const MockAuthProvider = ({ children }) => {
    const [user, setUser] = useState<{ username: string; } | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const login = async (username: string, password: string): Promise<void> => {
        setIsLoading(true);
        setErrorMessage("");

        return new Promise<void>((resolve, reject) => {
            setTimeout((): void => {
                if (username === "" || password === "") {
                    setErrorMessage("Username and password are required.");
                    setIsLoading(false);

                    reject("Invalid input");
                } else {
                    setUser({ username: username });
                    setIsLoading(false);

                    resolve();
                }
            }, 2000);
        })
    }

    const signup = async (username: string, password: string): Promise<void> => {
        return login(username, password);
    };

    const logout = async (): Promise<void> => {
        setIsLoading(true);

        return new Promise<void>((resolve) => {
            setTimeout((): void => {
                setUser(null);
                setIsLoading(false);

                resolve();
            }, 2000);
        });
    };

    return (
        <AuthContext.Provider value={{ user, errorMessage, isLoading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
