import { MsalAuthProvider, LoginType } from 'react-aad-msal';
import { Logger, LogLevel } from 'msal';
import config from './config.json';

// MSAL Configuration: 
// The options that get passed to the MsalAuthProvider are defined by the MSAL library, 
// and are described in more detail in the configuration options documentation.
// https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options
export const configuration = {
    auth: {
        authority: config.msal.authority,
        clientId: config.msal.clientId,
        postLogoutRedirectUri: config.msal.postLogoutRedirectUri,
        redirectUri: config.msal.redirectUri,
        validateAuthority: true,
        // After being redirected to the "redirectUri" page, should user
        // be redirected back to the Url where their login originated from?
        navigateToLoginRequestUrl: false
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false
    },
    // Enable logging of MSAL events for easier troubleshooting.
    // This should be disabled in production builds.
    system: {
        logger: new Logger(
            (logLevel, message, containsPii) => {
                console.log('[MSAL]', message);
            },
            {
                level: LogLevel.Verbose,
                piiLoggingEnabled: false
            }
        )
    }
};

// Authentication Parameters: 
// When instantiating an instance of the MsalAuthProvider 
// the authentication parameters passed will become the default parameters used when authenticating and fetching or refreshing tokens. 
// It is possible to change the default parameters later by executing the setAuthenticationParameters() method on the MsalAuthProvider.
// https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-scopes
export const parameters = {
    scopes: ['user.read']
};

// Options: [Optional] 
// The options parameter defines settings related to how the authentication provider processes authentication operations provided by the MSAL library.
export const options = {
    loginType: LoginType.Redirect,
    // When a token is refreshed it will be done by loading a page in an iframe.
    // Rather than reloading the same page, we can point to an empty html file which will prevent
    // site resources from being loaded twice.
    tokenRefreshUri: config.msal.tokenRefreshUri
};

export const authProvider = new MsalAuthProvider(configuration, parameters, options);
