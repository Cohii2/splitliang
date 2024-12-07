import AuthService from "@/features/auth/AuthService";

class TestAuthProvider implements AuthService {
    private _user: string | null = null;
    private _isLoading: boolean = false;

    get user(): string | null {
        return this._user;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    async signIn(username: string, password: string): Promise<void> {
        this._isLoading = true;
        // Simulate login request
    }

    signOut(): Promise<void> {
        return Promise.resolve(undefined);
    }
}
