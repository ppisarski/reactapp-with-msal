import { AuthenticationActions } from 'react-aad-msal';

export const logout = () => {
    return {
        type: AuthenticationActions.LogoutSuccess,
    };
};