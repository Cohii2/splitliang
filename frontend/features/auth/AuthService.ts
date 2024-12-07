// Interface for authentication logic.
interface AuthService {
    user: string | null;
    isLoading: boolean;
    signIn: (username: string, password: string) => Promise<void>;
    signOut: () => Promise<void>
}

export default AuthService;
